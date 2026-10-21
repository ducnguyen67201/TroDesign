# Tro UI

Tro's shared design system: a customized fork of Material UI {{UPSTREAM_VERSION}}, distributed as **{{PACKAGE_NAME}}**. The fork retains the upstream MIT copyright and license notices. This package contains the actual forked components, Tro defaults and configurable theme, rather than depending on the official Material UI component package.

## Install

```sh
pnpm add {{PACKAGE_NAME}}@{{PACKAGE_VERSION}} @emotion/react @emotion/styled
```

The registry command works after this version has been published. Before publication, install the generated `.tgz` file with `pnpm add /absolute/path/to/the-package.tgz`. React and React DOM must be installed by the consuming application.

## One project configuration

Create `ProjectDesign.ts` in your app:

```ts
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

Apply it once at the root:

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

Changing this project configuration updates components using the theme. Use `palette: { mode: 'dark' }` to select the independent dark role overrides. Custom application CSS must consume the resolved tokens/theme to participate; fonts must be available or loaded by the app.

`createTroTheme` retains ordinary MUI theme options as an escape hatch. Precedence is Tro defaults → project design → explicit theme options → component props/styles. `createTheme` retains upstream semantics. Use `resolveTroDesign(projectDesign, mode)` for custom surfaces and illustrations.

## TypeScript

Use this package's module paths for augmentation:

```ts
import '{{PACKAGE_NAME}}/styles';

declare module '{{PACKAGE_NAME}}/styles' {
  interface Theme {
    studioName?: string;
  }
  interface ThemeOptions {
    studioName?: string;
  }
}
```

The release tooling rewrites internal package self-references and declaration augmentation paths. Do not point augmentation at the official `@mui/material/styles` when importing this package by its own name.

## Existing MUI apps and icons

To retain existing `@mui/material/...` imports, install the Tro artifact under that compatibility alias:

```sh
pnpm add @mui/material@npm:{{PACKAGE_NAME}}@{{PACKAGE_VERSION}}
```

Use one installation style consistently. The alias also satisfies the Material UI peer expected by `@mui/icons-material`; do not accidentally install the official component package alongside the fork. Icons remain a separate package and retain their own notices. For package-name imports, use your own SvgIcon artwork or explicitly configure your package manager to resolve third-party Material UI peers to the Tro artifact.

Optional Pigment integration remains upstream-compatible and is not part of the default Emotion setup. MUI X, Lab and paid templates are separate integrations, not bundled features.

## Assistant guidance

Read `llms.txt`, `llms-full.txt` and `AGENTS.md` in this package. Point your project's AGENTS.md at the installed guide so coding assistants can discover the configuration and actual APIs. These files are documentation, not executable configuration or an automatic context guarantee.

## Source and provenance

Source: {{REPOSITORY}}. The upstream source workspace keeps its original `@mui/*` names to make updates reviewable. Distribution identity is {{PACKAGE_NAME}}@{{PACKAGE_VERSION}}. The maintained catalog has examples/recipes for the core families; this is not a complete prop/state, accessibility or browser certification. Keep the original MIT notices when redistributing this fork.
