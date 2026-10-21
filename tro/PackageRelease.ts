import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import packageConfig from './PackageConfig';
import formatPackageText from './PackageText';

interface JsonObject {
  [key: string]: unknown;
}

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

async function readManifest(path: string): Promise<JsonObject> {
  const value: unknown = JSON.parse(await readFile(path, 'utf8'));
  if (!isJsonObject(value)) {
    throw new Error(
      'Tro package manifest must be an object. Rebuild the upstream workspace package before packaging.',
    );
  }
  return value;
}

/** Rewrite only exact module specifiers; preserve @mui/material-pigment-css and license banners. */
export function rewritePackageImports(source: string, packageName: string): string {
  return source.replace(/(['"])@mui\/material(?=\/|\1)/g, `$1${packageName}`);
}

async function rewritePackageFiles(directory: string): Promise<void> {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await rewritePackageFiles(path);
      } else if (/\.(?:m?js|m?ts)$/.test(entry.name)) {
        const original = await readFile(path, 'utf8');
        const rewritten = rewritePackageImports(original, packageConfig.name);
        if (original !== rewritten) {
          await writeFile(path, rewritten);
        }
      }
    }),
  );
}

async function readWorkspaceVersions(root: string): Promise<Map<string, string>> {
  const directory = resolve(root, 'packages');
  const entries = await readdir(directory, { withFileTypes: true });
  const pairs = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const files = await readdir(resolve(directory, entry.name));
        if (!files.includes('package.json')) {
          return null;
        }
        const manifest = await readManifest(resolve(directory, entry.name, 'package.json'));
        if (typeof manifest.name !== 'string' || typeof manifest.version !== 'string') {
          return null;
        }
        return { name: manifest.name, version: manifest.version };
      }),
  );
  return new Map(pairs.filter((pair) => pair !== null).map((pair) => [pair.name, pair.version]));
}

function resolveDependencies(
  value: unknown,
  versions: ReadonlyMap<string, string>,
): Record<string, string> {
  if (!isJsonObject(value)) {
    throw new Error('Tro release dependency metadata is invalid. Rebuild the source package.');
  }
  return Object.fromEntries(
    Object.entries(value).map(([name, range]) => {
      if (typeof range !== 'string') {
        throw new Error(`Tro dependency ${name} must have a string version.`);
      }
      if (!range.startsWith('workspace:')) {
        return [name, range];
      }
      const version = versions.get(name);
      if (!version) {
        throw new Error(
          `Tro dependency ${name} has no workspace version. Check its owning package manifest.`,
        );
      }
      const prefix = range.slice('workspace:'.length);
      if (!['*', '^', '~'].includes(prefix)) {
        throw new Error(
          `Tro dependency ${name} has an unsupported workspace range. Resolve it explicitly before release.`,
        );
      }
      return [name, prefix === '*' ? version : `${prefix}${version}`];
    }),
  );
}

export async function stageReleasePackage(root: string): Promise<void> {
  const source = resolve(root, 'packages/mui-material/build');
  const destination = resolve(root, '.tro-package');
  const manifest = await readManifest(resolve(source, 'package.json'));
  if (manifest.name !== '@mui/material' || manifest.version !== packageConfig.upstreamVersion) {
    throw new Error(
      'Tro release expected the pinned upstream build. Rebuild and check PackageConfig.ts before staging.',
    );
  }
  const versions = await readWorkspaceVersions(root);
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true });
  await rewritePackageFiles(destination);
  const releaseManifest: JsonObject = {
    ...manifest,
    name: packageConfig.name,
    version: packageConfig.version,
    description: `${packageConfig.displayName}: a configurable design system built from a Material UI fork.`,
    author: 'Duc Nguyen',
    contributors: [{ name: 'MUI Team' }],
    repository: {
      type: 'git',
      url: `git+${packageConfig.repository}.git`,
      directory: 'packages/mui-material',
    },
    homepage: `${packageConfig.repository}#readme`,
    bugs: { url: `${packageConfig.repository}/issues` },
    dependencies: resolveDependencies(manifest.dependencies, versions),
    peerDependencies: resolveDependencies(manifest.peerDependencies, versions),
    publishConfig: { access: 'public', registry: 'https://registry.npmjs.org/' },
    tro: { upstream: 'mui/material-ui', upstreamVersion: packageConfig.upstreamVersion },
  };
  delete releaseManifest.funding;
  delete releaseManifest.scripts;
  await writeFile(
    resolve(destination, 'package.json'),
    `${JSON.stringify(releaseManifest, null, 2)}\n`,
  );
  const readme = await readFile(resolve(root, 'tro/PackageReadme.md'), 'utf8');
  await writeFile(resolve(destination, 'README.md'), formatPackageText(readme));
}
