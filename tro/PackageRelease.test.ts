import { afterEach, describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { rewritePackageImports, stageReleasePackage } from './PackageRelease';
import packageConfig from './PackageConfig';
import formatPackageText from './PackageText';

const fixtures: string[] = [];

afterEach(async () => {
  await Promise.all(fixtures.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

async function createFixture() {
  const root = await mkdtemp(resolve(tmpdir(), 'TroPackageTest-'));
  fixtures.push(root);
  await Promise.all(
    ['packages/mui-material/build/styles', 'packages/mui-system', 'tro'].map((path) =>
      mkdir(resolve(root, path), { recursive: true }),
    ),
  );
  await Promise.all([
    writeFile(
      resolve(root, 'packages/mui-material/build/package.json'),
      JSON.stringify({
        name: '@mui/material',
        version: packageConfig.upstreamVersion,
        dependencies: { '@mui/system': 'workspace:^' },
        peerDependencies: { react: '^19.0.0' },
        exports: { './styles': './styles/index.mjs' },
      }),
    ),
    writeFile(
      resolve(root, 'packages/mui-system/package.json'),
      JSON.stringify({ name: '@mui/system', version: '9.5.0' }),
    ),
    writeFile(
      resolve(root, 'packages/mui-material/build/styles/index.d.ts'),
      "declare module '@mui/material/styles' { interface Theme { testName?: string; } }",
    ),
    writeFile(
      resolve(root, 'tro/PackageReadme.md'),
      '{{PACKAGE_NAME}} {{PACKAGE_VERSION}} {{REPOSITORY}}',
    ),
  ]);
  return root;
}

describe('Tro distribution packaging', () => {
  it('fills documentation identity and rejects unresolved template tokens', () => {
    expect(formatPackageText('{{PACKAGE_NAME}}@{{PACKAGE_VERSION}}')).to.equal(
      `${packageConfig.name}@${packageConfig.version}`,
    );
    expect(() => formatPackageText('{{MISSING_TOKEN}}')).to.throw('unresolved token');
  });
  it('rewrites self-imports and augmentations without renaming a different dependency or attribution', () => {
    const source = `import Button from '@mui/material/Button';\nrequire("@mui/material");\ndeclare module '@mui/material/styles' {}\nimport Grid from '@mui/material-pigment-css/Grid';\n/* @mui/material v9.5.0 */`;
    const result = rewritePackageImports(source, packageConfig.name);
    expect(result).to.include(`'${packageConfig.name}/Button'`);
    expect(result).to.include(`require("${packageConfig.name}")`);
    expect(result).to.include(`declare module '${packageConfig.name}/styles'`);
    expect(result).to.include("'@mui/material-pigment-css/Grid'");
    expect(result).to.include('/* @mui/material v9.5.0 */');
  });
  it('stages a separately named package with registry ranges while preserving the workspace build', async () => {
    const root = await createFixture();
    await stageReleasePackage(root);
    const staged: unknown = JSON.parse(
      await readFile(resolve(root, '.tro-package/package.json'), 'utf8'),
    );
    expect(staged).to.include({ name: packageConfig.name, version: packageConfig.version });
    expect(await readFile(resolve(root, '.tro-package/package.json'), 'utf8')).not.to.include(
      'workspace:',
    );
    expect(await readFile(resolve(root, '.tro-package/styles/index.d.ts'), 'utf8')).to.include(
      packageConfig.name,
    );
    expect(
      await readFile(resolve(root, 'packages/mui-material/build/styles/index.d.ts'), 'utf8'),
    ).to.include('@mui/material/styles');
    expect(await readFile(resolve(root, '.tro-package/README.md'), 'utf8')).to.include(
      packageConfig.name,
    );
  });
  it('rejects an unrecognized upstream build before removing prior staged output', async () => {
    const root = await createFixture();
    await mkdir(resolve(root, '.tro-package'));
    await writeFile(resolve(root, '.tro-package/Keep.txt'), 'preserve');
    await writeFile(
      resolve(root, 'packages/mui-material/build/package.json'),
      JSON.stringify({ name: 'another-package', version: packageConfig.upstreamVersion }),
    );
    await expect(stageReleasePackage(root)).rejects.toThrow('pinned upstream build');
    expect(await readFile(resolve(root, '.tro-package/Keep.txt'), 'utf8')).to.equal('preserve');
  });
});
