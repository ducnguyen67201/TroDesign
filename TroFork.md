# Tro Design — Open World

This is a local fork of Material UI v9.5.0, baseline commit `1c3f8b4903f21cfad12c102edb3db4ceba2e8c8c`.
The original MIT license, source attribution and upstream documentation are retained.

## What is implemented

- `TroTokens.ts` owns the original Tro primitives; `TroDesign.ts` resolves semantic roles for each project and color mode.
- `createTroTheme` provides light/dark themes, typography and defaults for actions, inputs, cards, feedback, dialogs, navigation and data display.
- `defaultTheme.js` uses the Tro theme, so fork components without an explicit provider pick up Tro defaults. `createTheme` remains upstream-compatible; use `createTroTheme` for a branded explicit provider.
- `tro/` is a working component catalog with live controls, search, theme switching and copyable examples. It imports this checkout's component source through Vite aliases, not the published upstream package.

The proposed visual language follows the earlier Open World board. Dark mode is a fork/catalog proposal; it does not imply the existing Tro application has migrated or supports dark mode.

## One setup file per project

Edit `tro/ProjectDesign.ts` to change the catalog identity and project design. It is a typed TypeScript file, so misspelled roles are checked. Light and dark colors are independent: changing a light role does not guess a dark equivalent. Fonts must be available locally or loaded by the consuming app; setting a font name does not download it.

```tsx
import { createTroTheme, ThemeProvider } from '@mui/material/styles';
import { projectDesign } from './ProjectDesign';

const theme = createTroTheme({
  design: projectDesign.design,
  palette: { mode: 'light' },
  // Optional per-project component defaults; these override the shared design.
  components: { MuiButton: { defaultProps: { variant: 'contained' } } },
});

<ThemeProvider theme={theme}>{/* Every project screen */}</ThemeProvider>;
```

The inheritance order is Tro defaults → project design → explicit MUI theme overrides → individual component props/styles. `createTroTheme()` remains compatible with existing callers. `resolveTroDesign(projectDesign.design, mode)` exposes the same resolved roles to custom CSS, illustrations and non-MUI surfaces. All themes get fresh values; projects do not modify shared defaults.

The catalog's **Project** selector switches between Tro and Fieldwork. It changes the actual theme, shell, semantic swatches, illustrations, fonts, control sizes and corner styles, with no component source changes. Fieldwork is an example configuration in the same setup file, not a second component library.

For another project, copy the setup file, change its values, and wrap the app once. Keep the fork as the shared implementation and distribute versioned package updates when release packaging is ready. A fresh fork is useful only when a project intentionally needs independent component implementation changes. Existing custom CSS and fixed `sx` values must consume the shared roles/theme to participate; configuration cannot replace arbitrary hardcoded application styles. Do not expose runtime settings imported from untrusted JSON without validation.

## Local commands

This upstream baseline requires pnpm 12.4.2. Some development dependencies require Node 24.15+; the author's preinstalled Node 24.14 is too old for those dependencies. Use a supported Node 24 release for child processes. The pnpm 12 standalone binary embeds Node 25, so supply the matching `node-version` config when its engine detection sees that embedded version.

```sh
pnpm --config.node-version=24.15.0 install --frozen-lockfile
pnpm tro:dev
pnpm tro:build
pnpm --filter @mui/material... build
pnpm tro:typecheck
```

If pnpm's automatic version bootstrap is unavailable, invoke the official pinned tool through `npm exec --yes --package=node@24.15.0 --package=pnpm@12.4.2 -- pnpm --config.node-version=24.15.0 <command>`. Repository operations still run through pnpm. No global Node/pnpm configuration is changed.

The catalog listens at `http://127.0.0.1:3151`. No credentials, database, external fonts or paid components are needed by this catalog. Example interactions are local and do not save data.

The catalog type check consumes the built package declarations, so build the core packages first. The upstream packages are compiled with their existing compiler settings; the new catalog retains strict mode, noImplicitAny, noUncheckedIndexedAccess and exactOptionalPropertyTypes. Declaration-body checking is skipped at the consumer boundary, while its own code is fully checked. The live preview still imports fork source, not registry artifacts.

## Source ownership

The fork's first source change is concentrated in `packages/mui-material/src/styles/{TroTokens.ts,createTroTheme.ts,defaultTheme.js,index.js,index.d.ts}`. Most existing components inherit the theme rather than carrying bespoke implementation patches. This keeps the first upstream diff reviewable.

`tro/Main.tsx` is the catalog; `tro/Catalog.css` owns its layout, not the component implementation. The upstream Next.js website remains as reference material. Its original customer logos, commercial pages and claims are not presented as Tro's own.

## Assistant documentation

Run `pnpm tro:guide` to regenerate `llms.txt` and `llms-full.txt` from the Tro-authored guide and catalog registry. Both files are generated into the core package and the catalog public root. The package also includes an AGENTS.md entry point directing assistants to read them. The package build copies them into the packed artifact and exposes their asset subpaths. Core prebuild and catalog dev/build run the generator automatically. Put an explicit pointer to the installed guide in each consuming project's AGENTS.md; no file guarantees automatic ingestion by every assistant.

The canonical authoring sources are `tro/AssistantGuide.md`, `tro/CatalogEntries.ts` and the core public export list. The full guide records current package identity, configuration precedence, semantic roles, peer dependencies, actual exports, recipes and verification limits. `lm.csx` is not a runtime/configuration format introduced by this fork.

## Catalog coverage

The sidebar covers the free core component families across Inputs, Data display, Feedback, Surfaces, Navigation, Layout and Utilities. Examples use original Tro classroom content and the shared project theme. There are dedicated Alert, Snackbar and Progress pages. Alert supports all four severities and an appearance selector; Snackbar demonstrates an Undo action and a dismissible success alert. Text fields show outlined, filled and standard variants, followed by error, disabled and bilingual examples.

**Component coverage** reads public PascalCase default exports from the fork's actual `src/index.js` as catalog metadata. `tro/CatalogEntries.ts` connects the additional component families with `tro/MoreExamples.tsx`; `tro/SnackbarExamples.tsx` owns positioned, timed, transitional and queued notifications. Number field, transfer list and Menubar are explicitly labelled recipes. InitColorSchemeScript is a server integration recipe, not inserted into the palette-only client catalog. It lists each export as a linked local example or “To add”. Composition parts count as examples where they are rendered. This inventory measures example/recipe presence, not complete prop/state, design or accessibility coverage. Utility integrations are labelled in their owning page. It includes component parts, not only top-level UI families. It excludes utility functions and hooks, which require separate documentation. `tro/ComponentCoverage.ts` owns the mapping from components to demonstrated pages; update it when adding/removing examples.

## Distribution and GitHub

The GitHub fork is https://github.com/ducnguyen67201/TroDesign, with parent mui/material-ui. `origin` is the personal fork; `upstream` points to mui/material-ui and has pushing disabled locally. Tro work lives on `codex/tro-open-world`, based on the pinned v9.5.0 baseline. No upstream branch is overwritten.

The distribution identity is **@ducnguyen67201/tro-ui@9.5.0**, owned by `tro/PackageConfig.ts`. The distribution version tracks its compatible upstream API so Material icon peer ranges remain valid. The source workspace intentionally retains upstream `@mui/*` names. `pnpm tro:package` builds the fork, stages an isolated `.tro-package`, rewrites exact self-imports and declaration augmentations to the distribution name, resolves workspace dependency ranges to registry versions, sets fork metadata and a Tro README, and writes the tarball in `.tro-dist`. It preserves the original MIT license and attribution. The build output used by the catalog stays unchanged.

After publication, new consumers can install:

```sh
pnpm add @ducnguyen67201/tro-ui @emotion/react @emotion/styled
```

Use deep imports such as `@ducnguyen67201/tro-ui/Button` and `@ducnguyen67201/tro-ui/styles`. Before registry publication, install the generated local tarball instead. A successful tarball build does not mean npm publication succeeded. Current npm authentication must be checked separately.

For existing apps and Material icon peers, install the compatibility alias instead:

```sh
pnpm add @mui/material@npm:@ducnguyen67201/tro-ui@9.5.0
```

Keep `@mui/material/...` imports in that installation mode and use one mode consistently. Do not install the official component package alongside the fork accidentally. React/React DOM and Emotion remain consumer peers. Optional Pigment integration remains a separate upstream integration.

`pnpm tro:verify-package` validates the generated tarball in independent consumers, including TypeScript augmentation, ESM/CJS imports, server rendering and the Material icon compatibility alias. Local file-alias peer warnings are recorded in Verification.md; the named installation is the primary mode.

`pnpm tro:publish` is an explicit external publication command. It checks the staged package name/version against PackageConfig before invoking pnpm against the public npm registry. It must only run after reviewing the artifact, passing clean-consumer checks and authenticating the intended npm account. **Do not run the upstream publish/deploy scripts for a Tro release.** No command in the ordinary build/package path publishes, pushes or changes credentials.

For updates: fetch the selected upstream maintenance branch, review changes against the pinned baseline, merge into an isolated branch, run theme/component tests plus catalog checks, and inspect visual changes before adoption. Keep original license notices. Record the baseline of each released fork version.

## Scope and verification

This is the first usable fork foundation and component catalog. It is not a completed audit of every inherited component, a branded copy of every upstream documentation page, or a complete production-readiness certification. See `tro/Verification.md` for checks actually performed and remaining limitations.
