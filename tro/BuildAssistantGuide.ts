import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import catalogEntries from './CatalogEntries';
import packageConfig from './PackageConfig';
import formatPackageText from './PackageText';

const root = resolve(process.cwd());
const packageRoot = resolve(root, 'packages/mui-material');
const publicRoot = resolve(root, 'tro/public');
const guide = formatPackageText(readFileSync(resolve(root, 'tro/AssistantGuide.md'), 'utf8'));
const exportsSource = readFileSync(resolve(packageRoot, 'src/index.js'), 'utf8');
const componentNames = Array.from(
  exportsSource.matchAll(/export \{ default as ([A-Z]\w*) \} from/g),
  (match) => match[1],
).filter((name): name is string => typeof name === 'string');
const examples = Object.entries(catalogEntries)
  .map(
    ([name, entry]) =>
      `## ${name}\n\n${entry.description}\n\n\`\`\`tsx\n${entry.code.replace(/@mui\/material(?=\/|['"])/g, packageConfig.name)}\n\`\`\`\n`,
  )
  .join('\n');
const fullGuide = `${guide}\n## Core public component names\n\n${componentNames.join(', ')}.\n\n## Tro catalog composition examples\n\nSnippets show relevant composition; import referenced components, provide named state/callbacks and render sibling elements in a fragment. Snippets with integration comments are recipes.\n\n${examples}`;
const entryGuide = `# Tro UI

> ${packageConfig.name}@${packageConfig.version}, a Tro-branded fork of Material UI ${packageConfig.upstreamVersion}.

- [Complete assistant guide](./llms-full.txt): setup, semantic tokens, actual exports, examples, provenance and limits.
- [Package README](./README.md): installation modes and peer dependencies.
- [License](./LICENSE): retained core MIT terms.

Use createTroTheme({design}) from ${packageConfig.name}/styles and one project setup file. Use deep component imports. The source workspace retains @mui/material names; the release artifact is separately named. A registry release is not implied by these files. The compatibility alias @mui/material@npm:${packageConfig.name}@${packageConfig.version} supports existing MUI imports and icon peers after publication.
`;
mkdirSync(publicRoot, { recursive: true });
for (const destination of [packageRoot, publicRoot]) {
  writeFileSync(resolve(destination, 'llms.txt'), entryGuide);
  writeFileSync(resolve(destination, 'llms-full.txt'), fullGuide);
}
process.stdout.write(
  `Tro assistant guides written with ${componentNames.length} core exports and ${Object.keys(catalogEntries).length} composition entries.`,
);

writeFileSync(
  resolve(publicRoot, 'README.md'),
  readFileSync(resolve(packageRoot, 'README.md'), 'utf8'),
);
writeFileSync(resolve(publicRoot, 'LICENSE'), readFileSync(resolve(root, 'LICENSE'), 'utf8'));
