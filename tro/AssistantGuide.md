# {{PACKAGE_TITLE}} package guide

Featherlane AI UI is a customized fork of Material UI v9.5.0, baseline `1c3f8b4903f21cfad12c102edb3db4ceba2e8c8c`. It supplies an original Tro Open World theme and original classroom examples while retaining upstream component behavior, MIT attribution and license notices.

## Package identity and installation

Distribution package: **{{PACKAGE_NAME}}@{{PACKAGE_VERSION}}**. The source workspace retains its upstream `@mui/material` identity for maintenance; the release builder produces a distinct package and rewrites self-imports/declaration augmentations to the distribution name. This is the actual forked component implementation, not a thin theme wrapper around the official component package.

After registry publication, install `{{PACKAGE_NAME}}` with React/React DOM and Emotion peers. Before publication, install its tested local `.tgz` artifact. Do not claim a registry release exists just because a local package builds. The GitHub fork is {{REPOSITORY}}.

For an existing app or icon integration, the compatibility installation is `@mui/material@npm:{{PACKAGE_NAME}}@{{PACKAGE_VERSION}}`; retain the app's `@mui/material/...` imports in that mode. Use one installation mode consistently to avoid a duplicate official Material UI installation. Package-name imports and declaration augmentation should point to the distribution name. Material icons remain a separate package; they expect the Material UI peer, which the compatibility alias satisfies.

MUI X, Lab and commercial templates are not included in the core component package. No registry installation of the official `@mui/material` package supplies Tro additions.

## One configuration per project

Use a typed TypeScript setup file. Import the public TroDesignOptions type from `{{PACKAGE_NAME}}/styles`; do not import sibling repository source.

```tsx
import type { TroDesignOptions } from '{{PACKAGE_NAME}}/styles';

export const projectDesign = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  controlRadius: 12,
  cardRadius: 20,
  controlHeight: 44,
  spacingUnit: 8,
  colors: {
    light: { action: '#245C46', onAction: '#FFFFFF', canvas: '#F4F7F2' },
    dark: { action: '#A4DDB5', onAction: '#10271B', canvas: '#101F19' },
  },
} satisfies TroDesignOptions;
```

```tsx
import CssBaseline from '{{PACKAGE_NAME}}/CssBaseline';
import Button from '{{PACKAGE_NAME}}/Button';
import { createTroTheme, ThemeProvider } from '{{PACKAGE_NAME}}/styles';
import { projectDesign } from './ProjectDesign';

const theme = createTroTheme({ design: projectDesign });

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">Explore an idea</Button>
    </ThemeProvider>
  );
}
```

Precedence: Tro defaults, project `design`, ordinary MUI theme options, then component props/styles. `createTheme` retains upstream semantics; `createTroTheme` applies Tro defaults. Themes are isolated. `resolveTroDesign(design, mode)` returns resolved roles for custom CSS and illustrations. Custom hardcoded styles do not automatically inherit a theme. Fonts must be loaded by the app or available on the device.

## Semantic design contract

Light and dark role overrides are independent. The roles are canvas, surface, text, muted, action, onAction, accent, onAccent, focus, selected, border, controlBorder, success, error, warning and tableHead. Geometry includes controlRadius, cardRadius, dialogRadius, smallRadius and controlHeight. Typography includes fontFamily and headingFontFamily. Spacing uses spacingUnit.

Pair action with onAction and accent with onAccent; verify contrast for custom palettes. Use theme spacing instead of copying catalog pixel positions. Preserve visible focus, meaningful labels and minimum comfortable action sizes. Test your own light and dark configurations; the presence of a theme is not an accessibility certification.

## Component usage

Use one-level deep imports, for example `{{PACKAGE_NAME}}/Autocomplete`. Prefer composed components such as TextField and Dialog for ordinary tasks. Use lower-level primitives only when the task needs them. Public component declarations in the package are the authority for prop/slot types. Do not infer that every upstream documentation recipe is a package export.

Number field and transfer list are Tro composition recipes, not NumberField or TransferList core exports. Menubar is a Tro menu composition, not a core Menubar export. Upstream Base UI recipes require their own dependency and integration. Core exports such as Input/Select/Radio are supported using their actual names.

## Feedback and interaction rules

Use inline Alert for persistent information. Use Snackbar for noncritical updates; keep important errors in the page. Keep Escape dismissal and timer pause behavior. Give users time to read. One-at-a-time queues avoid stacking notices. Close a snackbar before its containing dialog on Escape. Use Dialog for a decision requiring focus. Restore focus to the opening action on dismissal. Menus and drawers need labels and working keyboard controls.

In the catalog, demonstrations are local only. No learning record, roster or activity is saved. Use real validated application services before claiming a production action succeeded.

## A complete basic notification

```tsx
import * as React from 'react';
import Button from '{{PACKAGE_NAME}}/Button';
import Snackbar from '{{PACKAGE_NAME}}/Snackbar';

export default function ActivityNotice() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show activity update</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Your activity is ready to explore."
        onClose={(_event, reason) => {
          if (reason !== 'clickaway') {
            setOpen(false);
          }
        }}
        action={
          <Button color="inherit" onClick={() => setOpen(false)}>
            Dismiss
          </Button>
        }
      />
    </React.Fragment>
  );
}
```

For a notification triggered from a Dialog, render its Snackbar inside that dialog's content subtree so the modal does not mark it aria-hidden. In the catalog the queued message state stays with SnackbarExamples and only the notification's rendering location changes. The queue reducer is catalog implementation, not an exported package service.

## Utilities and server integration

The catalog is a client-only Vite app. NoSsr and scoped Portal have local demos. InitColorSchemeScript has an integration recipe, not a client execution demo: place it before application content in server-rendered HTML and match ThemeProvider CSS-variable color-scheme settings. Do not add it to a palette-only client theme as a substitute for SSR integration. Respect reduced-motion preferences for transitions.

## Assistant discovery

This file and llms.txt are packaged and copied to the catalog's public root. They do not automatically change an assistant's context. In a consuming project's AGENTS.md, explicitly instruct coding assistants to read `node_modules/{{PACKAGE_NAME}}/llms.txt` from the installed Tro artifact, then `llms-full.txt`. For the compatibility alias, use node_modules/@mui/material/llms.txt instead. Do not invent an executable `lm.csx` configuration.

## Provenance and license

Core code is reused under its MIT license; original notices are retained. Small visual changes do not remove license obligations or turn inherited code into wholly original work. Tro's palette, compositions and content form the project identity. Do not remove upstream license headers, present upstream customer endorsements as Tro's, or assume paid templates/MUI X Pro/Premium have the core MIT terms.

## Verification limits

The catalog provides working component-family examples and integration recipes. It is not an exhaustive prop/state matrix or a complete accessibility, browser compatibility or visual regression audit. A component's presence is distinct from its interaction test coverage. Check tro/Verification.md in the fork for the checks actually run. Package release checks must include the generated assistant files in the packed artifact.
