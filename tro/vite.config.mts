import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryRoot = resolve(import.meta.dirname, '..');
const sourcePackages = {
  '@mui/material': 'mui-material',
  '@mui/system': 'mui-system',
  '@mui/utils': 'mui-utils',
  '@mui/private-theming': 'mui-private-theming',
  '@mui/styled-engine': 'mui-styled-engine',
} as const;

export default defineConfig({
  root: resolve(import.meta.dirname),
  // The upstream release build normally injects these source-level constants.
  define: {
    TRO_COMPONENT_NAMES: JSON.stringify(
      Array.from(
        readFileSync(
          resolve(repositoryRoot, 'packages/mui-material/src/index.js'),
          'utf8',
        ).matchAll(/export \{ default as ([A-Z]\w*) \} from/g),
        (match) => match[1],
      ),
    ),
    'process.env.MUI_VERSION': JSON.stringify('9.5.0'),
    'process.env.MUI_MAJOR_VERSION': '9',
    'process.env.MUI_MINOR_VERSION': '5',
    'process.env.MUI_PATCH_VERSION': '0',
    'process.env.MUI_PRERELEASE': 'undefined',
  },
  plugins: [
    {
      name: 'tro-upstream-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.startsWith(resolve(repositoryRoot, 'packages')) || !id.endsWith('.js')) {
          return null;
        }

        return transformWithOxc(code, id, { lang: 'tsx', jsx: { runtime: 'automatic' } });
      },
    },
    react(),
  ],
  resolve: {
    alias: [
      {
        find: '@mui/icons-material',
        replacement: resolve(repositoryRoot, 'packages/mui-icons-material/lib'),
      },
      ...Object.entries(sourcePackages).map(([find, folder]) => ({
        find,
        replacement: resolve(repositoryRoot, `packages/${folder}/src`),
      })),
    ],
  },
  optimizeDeps: { rolldownOptions: { moduleTypes: { '.js': 'tsx' } } },
  server: { host: '127.0.0.1', port: 3151, strictPort: true, fs: { allow: [repositoryRoot] } },
  build: { outDir: resolve(repositoryRoot, '.tro-build'), emptyOutDir: true },
});
