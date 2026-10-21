import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import packageConfig from './PackageConfig';

const root = resolve(process.cwd());
const directory = resolve(root, '.tro-package');
const manifest: unknown = JSON.parse(readFileSync(resolve(directory, 'package.json'), 'utf8'));
if (
  typeof manifest !== 'object' ||
  manifest === null ||
  !('name' in manifest) ||
  manifest.name !== packageConfig.name ||
  !('version' in manifest) ||
  manifest.version !== packageConfig.version
) {
  throw new Error(
    'Tro publish refuses an unexpected package identity. Run pnpm tro:package and inspect its artifact first.',
  );
}
execFileSync(
  'pnpm',
  [
    `--config.node-version=${process.versions.node}`,
    '--dir',
    directory,
    'publish',
    '--access',
    'public',
    '--no-git-checks',
  ],
  { cwd: root, stdio: 'inherit' },
);
