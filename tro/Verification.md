# Tro fork verification

Checked October 21, 2026. This is a first working fork foundation and local component catalog.

## Passed

- Frozen workspace installation using pnpm 12.4.2 and supported Node 24.15 child processes.
- Core dependency/package builds via `pnpm --filter @mui/material... build`, including JS bundles and declaration emission.
- `pnpm tro:typecheck`: strict catalog checking against built core declarations.
- ESLint on the changed/new TypeScript, JavaScript and setup files.
- Prettier check on the changed/new catalog, theme, setup and manifest files.
- Targeted upstream Button tests plus createTroTheme tests: **82 passed, 8 skipped**, two test files. Skips are upstream environment-dependent cases; no new skip/suppression was introduced.
- `pnpm tro:build`: production catalog output built from fork source.
- Local pnpm tarball packing. Inspection confirmed Tro theme JS/declarations and LICENSE are present and no catalog/private environment files are included.
- Clean temporary consumer: installed the actual tarball with published dependencies and lifecycle scripts disabled; imported Button, createTroTheme and TroTokens; asserted Light defaults and Dark text colors.
- `git diff --check` passed.
- GitHub API confirms `ducnguyen67201/TroDesign` is a fork of `mui/material-ui`.

## Browser checks

- Navigated Colors, Typography, Text fields, Selection, Feedback, Navigation, Cards, Tables, Classroom and Buttons; each rendered its expected heading and example.
- Changing the button variant updated both the rendered control and displayed code.
- Disabled switch disabled the example actions.
- Search filtered the navigation to Dialogs.
- Dialog opened; Escape closed it and focus returned to its opening button after the close transition.
- Dark/light switching updated the catalog and component theme.
- At 390px width, Buttons and bilingual Text fields had document scrollWidth equal to viewport width.
- Reset viewport overrides after testing. The deliverable tab remains open; isolated review tabs are not retained.

Screenshots and tarball are in `/Users/ducng/Desktop/TroDesignForkReview`:

- `TroCatalog.jpg`
- `DarkCatalog.jpg`
- `MobileFields.jpg`
- `mui-material-9.5.0.tgz`

Tarball SHA256: `d7413156306ad04101b95cc1b79bca6ba3a42e5de5309101da0640c7a8c34bbe`.

## Warnings and limits

- The catalog's all-components production bundle emits a chunk-size warning: approximately 660kB minified / 191kB gzip. It is a documentation/catalog bundle; application adoption should measure and split real consumer entrypoints.
- The upstream test infrastructure emits a transformWithEsbuild deprecation warning. No new use of that deprecated API was introduced; the catalog uses transformWithOxc.
- Workspace installation reports inherited peer/deprecation warnings. A full dependency audit was not run; no commit was created.
- The stricter catalog flags initially exposed upstream source assumptions. Core sources are now compiled under their existing upstream settings; the consumer checks built declarations with skipLibCheck while retaining strict/noImplicitAny/noUncheckedIndexedAccess/exactOptionalPropertyTypes for its own code.
- Full monorepo tests, complete accessibility/visual regressions, all docs builds and API/proptype generation were not run. No component props were changed; a new theme factory/token export was added and its declaration output was built.
- The copy button is implemented using the clipboard API, with a visible failure fallback; actual clipboard permission/write was not exercised in the review.
- Not every copied catalog snippet is a complete application. The catalog is a starter set of component examples; the full inherited API remains in upstream documentation.
- Original Tro application files were not migrated. No npm publication or website deployment occurred. Branding changes remain uncommitted/unpushed locally; the GitHub fork currently contains upstream source.
- The tarball retains the upstream `@mui/material@9.5.0` identity for local installation. It is not the official upstream tarball and must not be uploaded under that identity. A verified Tro scope, self-reference/declaration rewrite and release validation remain required before npm publication.

## Project configuration follow-up — October 21, 2026

Added `TroDesignOptions`, `TroThemeOptions` and `resolveTroDesign`; `createTroTheme` accepts a `design` configuration. `tro/ProjectDesign.ts` is the catalog's local setup file. Original defaults remain compatible.

Rechecked core package/dependency builds, strict catalog type checking, scoped ESLint, production catalog build and diff whitespace. The targeted theme/Button suite now has **85 passed, 8 skipped**. Prettier checked all changed theme/catalog files; the final Main.tsx correction was formatted again. No full monorepo suite or complete accessibility regression run was performed.

Browser verification used a separate hidden tab. Switching to Fieldwork produced a green action (`#245C46`), a pale green canvas (`#F4F7F2`), Georgia type, 4px button/input corners and 48px button minimum height. Dark mode produced `#101F19` canvas and `#A4DDB5` action. Returning to Tro restored its identity. At 390px, document width was 390px; the viewport override was reset afterward. Screenshot: `/Users/ducng/Desktop/TroDesignForkReview/FieldworkConfig.jpg`.

Packed the updated build as `/Users/ducng/Desktop/TroDesignForkReview/TroConfig.tgz` and installed it into the isolated temporary consumer with lifecycle scripts disabled. Node imports of Button, createTroTheme and resolveTroDesign passed, including custom light/dark actions and radius resolution. The older tarball/checksum above describes the earlier baseline; use TroConfig.tgz for this configuration follow-up. Both artifacts retain upstream package identity for local testing only, with the same release restrictions described above.

The production catalog still emits the documented chunk-size warning (about 663kB / 192kB gzip). Theme settings do not automatically validate custom color contrast or load fonts. Consumers must use the theme/semantic roles in custom styles for those surfaces to inherit changes.

## Feedback and coverage follow-up — October 21, 2026

Added dedicated Alert, Snackbar and Progress pages, three TextField variants, and a searchable component inventory derived from the actual public PascalCase default exports at catalog build time. The inventory shows **42 of 130 exports** mapped to explicitly rendered examples, including composition parts. This is example presence, not complete variant/state or accessibility coverage; unlisted examples remain marked “To add”. The inventory does not bundle the component barrel.

Passed core package/dependency builds, scoped ESLint, strict catalog type checking and production catalog build. The targeted createTroTheme, Alert and Snackbar suites passed **118 tests, 11 skipped** (upstream environment-dependent cases). Browser checks confirmed standard/filled/outlined alert appearance selection, all four severity messages, snackbar display and Undo feedback, success snackbar with close control, all three TextField variants, Progress rendering, coverage filtering and navigation from an inventory row. Screenshots: `AlertCatalog.jpg` and `SnackbarCatalog.jpg` in the existing review folder.

No complete accessibility audit or full monorepo suite was run. The documentation bundle still emits its size warning (about 676kB / 196kB gzip). Earlier packed artifacts predate this follow-up; the current source and built catalog include these additions. Nothing was pushed or published.

## Complete core catalog and assistant package — October 21, 2026

Expanded the catalog to **70 destinations** spanning all free core component families, foundations, project patterns and utilities. The source-derived export inventory maps **130 of 130 public PascalCase default component exports** to a Tro-authored example or explicitly identified integration recipe, including composition parts. This is a registry of usage, not a claim that every component prop, state or accessibility rule has been audited. Number field, Menubar and transfer list are recipes; the server-only InitColorSchemeScript page is an integration explanation.

Extended shared theme rules for autocomplete, lists, navigation, surfaces, drawers, popovers, pagination, feedback, skeletons and other controls. The three optional Material icon examples use the existing separate icon package; the catalog also contains original Tro SVG symbols and a local learning-trail illustration. No paid MUI X features, store templates or third-party customer endorsements were imported.

Generated package-root `llms.txt` and `llms-full.txt` from the canonical assistant guide, catalog registry and public export list. Package builds generate/copy both guides and an AGENTS.md pointer into the packed package. Guide assets are also served at the catalog root; README/LICENSE links were checked. The guide records actual package identity, semantic roles, setup precedence, deep imports, recipes, keyboard behavior, provenance and limits. It does not promise automatic ingestion by every assistant.

### Checks performed

- Core JS/declaration and dependency builds passed. Asset-export warnings occur before the build's copy stage; the packed asset presence is separately verified.
- Strict catalog type checking, scoped ESLint, Prettier and diff whitespace checks passed.
- Targeted theme, Alert, Snackbar, Menu, Drawer and Select suites: **398 passed, 41 skipped**, six test files. Skips are inherited environment-dependent tests. The separate queue reducer suite passed **4 tests**, including ordering, transition completion, enqueue-during-exit and stale-callback behavior.
- Browser smoke checks rendered **all 70 destinations** with Tro light and with Fieldwork dark; no captured warning/error logs were emitted in those runs.
- Browser mobile checks visited all 70 destinations at **390px**, with document width equal to viewport width; viewport overrides were restored. Drawer/transfer actions also use a vertical layout on narrow screens.
- Interaction checks covered autocomplete filtering/selection, transfer-list movement, drawer Escape dismissal and focus restoration, menubar arrow-key navigation and menu opening, consecutive snackbar ordering and dismissal, and dialog/snackbar Escape ordering.
- A dialog notification was initially visible inside an aria-hidden ancestor. It was moved into the dialog's content subtree; the recheck confirmed no aria-hidden ancestor, first Escape dismissing only the notification and next Escape dismissing the dialog.
- Production catalog build passed. It retains a bundle-size warning (about **934kB / 260kB gzip**); the complete catalog is not an optimized application entrypoint.
- Final local package artifact: `/Users/ducng/Desktop/TroDesignForkReview/TroFullCatalog.tgz`. It retains the local-test `@mui/material@9.5.0` identity and must not be published as the official upstream package. Older review tarballs predate these additions.

The entire monorepo suite, full visual regressions and comprehensive accessibility audit were not run. No npm publication, push or deployment occurred. The original Tro application remains unchanged.

The final tarball was also installed into a fresh isolated consumer with lifecycle scripts disabled. Node verified `llms.txt` and `llms-full.txt` through their public asset exports, the updated dialog accessibility guidance, custom semantic snackbar colors/radius, the design resolver, and Snackbar/Menu imports. Tarball inspection confirmed AGENTS.md and LICENSE are included. The original license notice is retained.

## Named npm distribution — October 21, 2026

The release artifact is now **@ducnguyen67201/tro-ui@9.5.0**, with identity configured in PackageConfig.ts. Its version matches the compatible upstream API. Source workspace names remain @mui/*; the release pipeline builds a separate package, rewrites exact self-import/declaration module specifiers, resolves workspace dependency ranges and replaces distribution metadata/README. It preserves upstream license notices and distinct dependency names such as @mui/material-pigment-css.

`pnpm tro:package` produced `.tro-dist/ducnguyen67201-tro-ui-9.5.0.tgz`. `pnpm tro:verify-package` installed that artifact into fresh temporary consumers with lifecycle scripts disabled and NODE_PATH cleared, then passed:

- Strict TypeScript with theme and custom Button variant augmentation using the new module names.
- ESM deep imports, root exports and CommonJS import resolution.
- React server rendering driven by one ProjectDesign.ts, including its custom color, font and geometry.
- Assistant asset exports and correct fork metadata, license and package identity.
- Compatibility installation under the @mui/material alias, with a real @mui/icons-material icon resolving the same Tro fork rather than an extra official component installation.

The local file-alias compatibility install emits a pnpm peer-range warning despite the matching API version; runtime resolution and rendering passed. Registry alias resolution will be checked after a registry release exists. Named-package installation emits no such icon peer warning because icons are a separate optional integration.

The release/queue unit suite passed **8 tests**. Core build/declaration generation, strict catalog checking, scoped lint, catalog build, formatting and diff whitespace checks passed. The named consumer's production dependency audit reported **0 known vulnerabilities**. The previous full catalog and targeted upstream checks remain recorded above; this work does not claim a new complete accessibility audit.

The source fork is ducnguyen67201/TroDesign, branch codex/tro-open-world. npm authentication initially returned E401; an official npm web login flow was opened for the account owner. A local tarball or source commit must not be described as a published registry release; publication status is checked separately.

## Featherlane AI UI release submission — October 21, 2026

The confirmed npm owner is danielbaker06072001 and the final package is **@danielbaker06072001/featherlane-ai-ui@9.5.0**. Source and distribution documentation use the display name **Featherlane AI UI**. The public theme API remains createTroTheme and TroDesignOptions. The renamed package passed the eight release/queue tests, strict catalog checking, scoped lint, formatting, core/declaration and catalog builds, and independent local-tarball consumer checks recorded above.

After the account owner completed npm login and publication passkey checks, `pnpm tro:publish` exited successfully and reported the package published. Independent checks did **not** confirm a usable registry release: the npm website showed the temporary `0.0.0-stage` holding version, while npm registry metadata for the package returned E404. Both the website Staged Packages list and `npm stage list` returned no pending review entries. An attempt to submit the same reviewed artifact to the staging area returned E409, stating version 9.5.0 had already been published. No version was changed or security setting weakened to bypass this state.

The upload has been accepted, but registry installation of 9.5.0 remains unverified and unavailable at this check. Do not describe the CLI success message alone as a working public release. Recheck registry availability before recommending the registry install command; complete independent registry consumer verification once it is available.

The tested local artifact is also available at `/Users/ducng/Desktop/TroDesignForkReview/FeatherlaneAiUi-9.5.0.tgz`. Consumers can use it immediately with:

```sh
pnpm add /Users/ducng/Desktop/TroDesignForkReview/FeatherlaneAiUi-9.5.0.tgz @emotion/react @emotion/styled
```

React and React DOM remain application prerequisites. The source is pushed to the user's fork at `https://github.com/ducnguyen67201/TroDesign/tree/codex/tro-open-world`; the customized branch is separate from the upstream default branch.
