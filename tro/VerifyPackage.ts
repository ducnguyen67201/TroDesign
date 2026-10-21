import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import packageConfig from './PackageConfig';
import formatPackageText from './PackageText';

const root = resolve(process.cwd());
const destination = mkdtempSync(resolve(tmpdir(), 'TroDistributionConsumer-'));
const filename = `${packageConfig.name.replace('@', '').replace('/', '-')}-${packageConfig.version}.tgz`;
const originalPackage: unknown = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
if (
  typeof originalPackage !== 'object' ||
  originalPackage === null ||
  !('devDependencies' in originalPackage) ||
  typeof originalPackage.devDependencies !== 'object' ||
  originalPackage.devDependencies === null ||
  !('typescript' in originalPackage.devDependencies) ||
  typeof originalPackage.devDependencies.typescript !== 'string'
) {
  throw new Error(
    'Tro consumer verification requires the repository TypeScript toolchain version.',
  );
}
writeFileSync(
  resolve(destination, 'package.json'),
  JSON.stringify(
    {
      name: 'tro-independent-consumer',
      private: true,
      type: 'module',
      packageManager: 'pnpm@12.4.2',
      dependencies: {
        [packageConfig.name]: `file:${resolve(root, '.tro-dist', filename)}`,
        react: '19.3.0',
        'react-dom': '19.3.0',
        '@emotion/react': '11.14.0',
        '@emotion/styled': '11.14.1',
      },
      devDependencies: {
        '@types/react': '19.3.0',
        '@types/react-dom': '19.3.0',
        typescript: originalPackage.devDependencies.typescript,
      },
    },
    null,
    2,
  ),
);
writeFileSync(
  resolve(destination, 'tsconfig.json'),
  JSON.stringify(
    {
      compilerOptions: {
        target: 'ES2022',
        module: 'NodeNext',
        moduleResolution: 'NodeNext',
        jsx: 'react-jsx',
        strict: true,
        noImplicitAny: true,
        noUncheckedIndexedAccess: true,
        exactOptionalPropertyTypes: true,
        useUnknownInCatchVariables: true,
        skipLibCheck: true,
        outDir: 'build',
      },
      include: ['*.ts', '*.tsx'],
    },
    null,
    2,
  ),
);
for (const name of ['ProjectDesign.ts', 'App.tsx', 'Verify.mjs']) {
  writeFileSync(
    resolve(destination, name),
    formatPackageText(readFileSync(resolve(root, 'tro/consumer', `${name}.template`), 'utf8')),
  );
}
const childEnvironment = { ...process.env, NODE_PATH: '' };
const pnpmOptions = [`--config.node-version=${process.versions.node}`, '--dir', destination];
execFileSync('pnpm', [...pnpmOptions, 'install', '--ignore-scripts'], {
  cwd: root,
  stdio: 'inherit',
  env: childEnvironment,
});
execFileSync('pnpm', [...pnpmOptions, 'exec', 'tsc', '-p', 'tsconfig.json'], {
  cwd: root,
  stdio: 'inherit',
  env: childEnvironment,
});
execFileSync(process.execPath, [resolve(destination, 'Verify.mjs')], {
  cwd: destination,
  stdio: 'inherit',
  env: childEnvironment,
});
process.stdout.write(`Consumer fixture retained at ${destination}\n`);

const compatibility = mkdtempSync(resolve(tmpdir(), 'TroCompatibilityConsumer-'));
writeFileSync(
  resolve(compatibility, 'package.json'),
  JSON.stringify(
    {
      name: 'tro-compatibility-consumer',
      private: true,
      type: 'module',
      packageManager: 'pnpm@12.4.2',
      dependencies: {
        '@mui/material': `file:${resolve(root, '.tro-dist', filename)}`,
        '@mui/icons-material': packageConfig.upstreamVersion,
        react: '19.3.0',
        'react-dom': '19.3.0',
        '@emotion/react': '11.14.0',
        '@emotion/styled': '11.14.1',
      },
    },
    null,
    2,
  ),
);
writeFileSync(
  resolve(compatibility, 'Compatibility.mjs'),
  formatPackageText(readFileSync(resolve(root, 'tro/consumer/Compatibility.mjs.template'), 'utf8')),
);
execFileSync(
  'pnpm',
  [
    `--config.node-version=${process.versions.node}`,
    '--dir',
    compatibility,
    'install',
    '--ignore-scripts',
  ],
  { cwd: root, stdio: 'inherit', env: childEnvironment },
);
execFileSync(process.execPath, [resolve(compatibility, 'Compatibility.mjs')], {
  cwd: compatibility,
  stdio: 'inherit',
  env: childEnvironment,
});
process.stdout.write(`Compatibility fixture retained at ${compatibility}\n`);
