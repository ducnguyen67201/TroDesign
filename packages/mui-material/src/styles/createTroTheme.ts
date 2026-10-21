import deepmerge from '@mui/utils/deepmerge';
import createTheme, { Theme, ThemeOptions } from './createTheme';
import { resolveTroDesign, TroDesignOptions } from './TroDesign';

export interface TroThemeOptions extends ThemeOptions {
  design?: TroDesignOptions | undefined;
}

/**
 * Create Tro's branded theme while preserving the upstream component API.
 * Explicit consumer overrides are merged last; MUI's createTheme remains available.
 */
export default function createTroTheme({ design, ...options }: TroThemeOptions = {}): Theme {
  const mode = options.palette?.mode === 'dark' ? 'dark' : 'light';
  const settings = resolveTroDesign(design, mode);
  const colors = settings.colors;
  const border = colors.controlBorder;
  const focus = colors.focus;
  const surface = colors.surface;

  const defaults: ThemeOptions = {
    palette: {
      mode,
      primary: { main: colors.action, contrastText: colors.onAction },
      secondary: { main: colors.accent, contrastText: colors.onAccent },
      info: { main: focus },
      success: { main: colors.success },
      error: { main: colors.error },
      warning: { main: colors.warning },
      background: { default: colors.canvas, paper: surface },
      text: { primary: colors.text, secondary: colors.muted },
      divider: colors.border,
    },
    spacing: settings.spacingUnit,
    shape: { borderRadius: settings.controlRadius },
    typography: {
      fontFamily: settings.fontFamily,
      h1: {
        fontFamily: settings.headingFontFamily,
        fontWeight: 500,
        fontSize: '3.5rem',
        lineHeight: 1.08,
        letterSpacing: '-0.055em',
      },
      h2: {
        fontFamily: settings.headingFontFamily,
        fontWeight: 500,
        fontSize: '2.5rem',
        lineHeight: 1.15,
        letterSpacing: '-0.045em',
      },
      h3: {
        fontFamily: settings.headingFontFamily,
        fontWeight: 500,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: '-0.035em',
      },
      h4: {
        fontFamily: settings.headingFontFamily,
        fontWeight: 500,
        fontSize: '1.65rem',
        lineHeight: 1.25,
        letterSpacing: '-0.03em',
      },
      h5: {
        fontFamily: settings.headingFontFamily,
        fontWeight: 500,
        fontSize: '1.3rem',
        lineHeight: 1.3,
      },
      h6: {
        fontFamily: settings.headingFontFamily,
        fontWeight: 600,
        fontSize: '1.05rem',
        lineHeight: 1.4,
      },
      body1: { fontSize: '1rem', lineHeight: 1.6 },
      body2: { fontSize: '0.875rem', lineHeight: 1.6 },
      button: { fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          paper: { borderRadius: settings.controlRadius, border: `1px solid ${colors.border}` },
          option: { minHeight: settings.controlHeight },
        },
      },
      MuiButtonGroup: { styleOverrides: { root: { borderRadius: settings.controlRadius } } },
      MuiFab: {
        defaultProps: { disableRipple: false },
        styleOverrides: {
          root: { boxShadow: 'none' },
          extended: { borderRadius: settings.controlRadius },
        },
      },
      MuiInputBase: { styleOverrides: { root: { fontFamily: settings.fontFamily } } },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            minHeight: settings.controlHeight,
            borderRadius: settings.smallRadius,
            '&.Mui-selected': { backgroundColor: colors.selected },
          },
        },
      },
      MuiListSubheader: {
        styleOverrides: {
          root: { backgroundColor: colors.surface, color: colors.muted, fontWeight: 600 },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: { backgroundColor: colors.selected, color: colors.text },
          rounded: { borderRadius: settings.controlRadius },
        },
      },
      MuiBadge: { styleOverrides: { badge: { fontWeight: 600 } } },
      MuiRating: { styleOverrides: { iconFilled: { color: colors.accent } } },
      MuiSkeleton: {
        styleOverrides: {
          root: { borderRadius: settings.smallRadius, backgroundColor: colors.selected },
        },
      },
      MuiAppBar: {
        defaultProps: { color: 'default', elevation: 0 },
        styleOverrides: { root: { borderBottom: `1px solid ${colors.border}` } },
      },
      MuiDrawer: {
        styleOverrides: { paper: { backgroundColor: colors.surface, borderColor: colors.border } },
      },
      MuiPopover: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          paper: { borderRadius: settings.cardRadius, border: `1px solid ${colors.border}` },
        },
      },
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            backgroundColor: colors.surface,
            borderTop: `1px solid ${colors.border}`,
            borderRadius: settings.controlRadius,
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            minHeight: settings.controlHeight,
            color: colors.muted,
            '&.Mui-selected': { color: focus },
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            borderRadius: settings.smallRadius,
            minWidth: settings.controlHeight,
            minHeight: settings.controlHeight,
            '&.Mui-selected': { backgroundColor: colors.selected },
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: { '&.Mui-active': { color: focus }, '&.Mui-completed': { color: colors.success } },
        },
      },
      MuiStepConnector: { styleOverrides: { line: { borderColor: colors.border } } },
      MuiMobileStepper: {
        styleOverrides: {
          root: { backgroundColor: colors.surface, borderRadius: settings.controlRadius },
        },
      },
      MuiSnackbarContent: {
        defaultProps: { role: 'status' },
        styleOverrides: {
          root: {
            backgroundColor: colors.action,
            color: colors.onAction,
            borderRadius: settings.controlRadius,
            boxShadow: 'none',
            border: `1px solid ${colors.controlBorder}`,
          },
          message: { lineHeight: 1.6 },
        },
      },
      MuiSpeedDial: { styleOverrides: { fab: { boxShadow: 'none' } } },
      MuiSpeedDialAction: {
        styleOverrides: {
          fab: {
            backgroundColor: colors.surface,
            color: colors.text,
            border: `1px solid ${colors.controlBorder}`,
            boxShadow: 'none',
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            minHeight: settings.controlHeight,
            paddingInline: settings.spacingUnit * 2.5,
            borderRadius: settings.controlRadius,
          },
          outlined: { borderColor: border },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: { '&.Mui-focusVisible': { outline: `3px solid ${focus}`, outlineOffset: 3 } },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            minWidth: settings.controlHeight,
            minHeight: settings.controlHeight,
            borderRadius: settings.controlRadius,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: settings.controlRadius,
            backgroundColor: surface,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: border },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderTopLeftRadius: settings.controlRadius,
            borderTopRightRadius: settings.controlRadius,
          },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: { rounded: { borderRadius: settings.cardRadius } },
      },
      MuiCard: {
        defaultProps: { variant: 'outlined' },
        styleOverrides: { root: { borderRadius: settings.cardRadius } },
      },
      MuiChip: {
        styleOverrides: { root: { fontWeight: 500, borderRadius: settings.smallRadius } },
      },
      MuiAlert: {
        styleOverrides: {
          root: { borderRadius: settings.controlRadius },
          message: { lineHeight: 1.6 },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: { minHeight: settings.controlHeight + 4, textTransform: 'none', fontWeight: 600 },
        },
      },
      MuiDialog: { styleOverrides: { paper: { borderRadius: settings.dialogRadius } } },
      MuiDialogTitle: { styleOverrides: { root: { fontWeight: 500, letterSpacing: '-0.025em' } } },
      MuiMenu: {
        styleOverrides: {
          paper: { borderRadius: settings.controlRadius, border: `1px solid ${border}` },
        },
      },
      MuiMenuItem: { styleOverrides: { root: { minHeight: settings.controlHeight } } },
      MuiTooltip: {
        styleOverrides: {
          tooltip: { borderRadius: settings.smallRadius, fontSize: '0.75rem', padding: '8px 12px' },
        },
      },
      MuiLink: { defaultProps: { underline: 'hover' }, styleOverrides: { root: { color: focus } } },
      MuiCheckbox: {
        styleOverrides: {
          root: { minWidth: settings.controlHeight, minHeight: settings.controlHeight },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: { minWidth: settings.controlHeight, minHeight: settings.controlHeight },
        },
      },
      MuiLinearProgress: { styleOverrides: { root: { height: 6, borderRadius: 6 } } },
      MuiAccordion: {
        defaultProps: { disableGutters: true, elevation: 0 },
        styleOverrides: {
          root: { border: `1px solid ${border}`, '&:before': { display: 'none' } },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: { fontWeight: 600, backgroundColor: colors.tableHead },
        },
      },
    },
  };

  return createTheme(deepmerge(defaults, options));
}
