import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import packageConfig from './PackageConfig';

const root = resolve(process.cwd());
const destination = resolve(root, '.tro-dist');
mkdirSync(destination, { recursive: true });
const filename = `${packageConfig.name.replace('@', '').replace('/', '-')}-${packageConfig.version}.tgz`;
execFileSync(
  'pnpm',
  [
    `--config.node-version=${process.versions.node}`,
    '--dir',
    resolve(root, '.tro-package'),
    'pack',
    '--out',
    resolve(destination, filename),
  ],
  { cwd: root, stdio: 'inherit' },
);
