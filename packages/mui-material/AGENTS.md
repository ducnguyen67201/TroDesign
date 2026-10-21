# Featherlane AI UI assistant entry point

This checkout/package is a Tro-branded fork of Material UI, not an official upstream release.
The distribution is @danielbaker06072001/featherlane-ai-ui; this source workspace keeps @mui/material names.
Read `llms.txt`, then `llms-full.txt`, before generating UI or changing Tro-specific styling.
The guides describe the actual package identity, public exports, project setup and limitations.

Use `createTroTheme({ design })` from `@danielbaker06072001/featherlane-ai-ui/styles` in distribution consumers.
Use @mui/material/styles in the source workspace or compatibility alias installation.
Keep deep component imports and inherited public contracts. Reuse semantic roles and shared
component defaults rather than hardcoding a second palette in application components.
Number field, transfer list and Menubar are recipes, not invented core exports.

Preserve upstream copyright and MIT license notices. Do not publish this fork as the official
`@mui/material` package. The registry release status must be verified separately from a successful local package build.
No paid MUI X or store-template rights are granted by the core MIT license.

When working from the repository, continue to follow its root AGENTS.md and TroFork.md.
The guides are generated from tro/AssistantGuide.md and tro/CatalogEntries.ts; edit those
sources and run `pnpm tro:guide` from the repository root instead of editing generated text.
