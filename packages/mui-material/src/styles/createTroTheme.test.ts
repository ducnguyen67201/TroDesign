import { describe, it, expect } from 'vitest';
import createTroTheme from './createTroTheme';
import defaultTheme from './defaultTheme';

describe('createTroTheme', () => {
  it('supplies the Tro foundation to components without an explicit provider', () => {
    expect(defaultTheme.palette.background.default).to.equal('#FFFCF2');
    expect(defaultTheme.palette.primary.main).to.equal('#252422');
    expect(defaultTheme.typography.button.textTransform).to.equal('none');
  });

  it('keeps explicit consumer overrides and unrelated branded component rules', () => {
    const theme = createTroTheme({
      palette: { primary: { main: '#2549E8' } },
      components: { MuiButton: { defaultProps: { size: 'large' } } },
    });
    expect(theme.palette.primary.main).to.equal('#2549E8');
    expect(theme.components?.MuiButton?.defaultProps?.size).to.equal('large');
    expect(theme.components?.MuiButton?.defaultProps?.disableElevation).to.equal(true);
    expect(theme.components?.MuiButton?.styleOverrides?.root).not.to.equal(undefined);
  });

  it('pairs dark surfaces with light text and primary-action foregrounds', () => {
    const theme = createTroTheme({ palette: { mode: 'dark' } });
    expect(theme.palette.background.default).to.equal('#1B1A18');
    expect(theme.palette.text.primary).to.equal('#FFFCF2');
    expect(theme.palette.primary.contrastText).to.equal('#1B1A18');
  });
});

describe('project configuration', () => {
  it('propagates one setup into palette, geometry, fonts and spacing', () => {
    const theme = createTroTheme({
      design: {
        colors: { light: { action: '#245C46', onAction: '#FFFFFF', canvas: '#F4F7F2' } },
        controlRadius: 4,
        cardRadius: 8,
        controlHeight: 48,
        spacingUnit: 9,
        fontFamily: 'Georgia, serif',
      },
    });
    expect(theme.palette.primary.main).to.equal('#245C46');
    expect(theme.palette.primary.contrastText).to.equal('#FFFFFF');
    expect(theme.palette.background.default).to.equal('#F4F7F2');
    expect(theme.shape.borderRadius).to.equal(4);
    expect(theme.typography.h2.fontFamily).to.equal('Georgia, serif');
    expect(theme.spacing(2)).to.equal('18px');
    expect(theme.components?.MuiButton?.styleOverrides?.root).to.include({
      borderRadius: 4,
      minHeight: 48,
    });
    expect(theme.components?.MuiOutlinedInput?.styleOverrides?.root).to.include({
      borderRadius: 4,
    });
    expect(theme.components?.MuiCard?.styleOverrides?.root).to.include({ borderRadius: 8 });
  });

  it('isolates mode overrides and does not mutate a reused project configuration', () => {
    const design = Object.freeze({
      colors: Object.freeze({
        light: Object.freeze({ action: '#245C46' }),
        dark: Object.freeze({ action: '#A4DDB5' }),
      }),
    });
    const light = createTroTheme({ design });
    const dark = createTroTheme({ design, palette: { mode: 'dark' } });
    light.palette.primary.main = '#FFFFFF';
    expect(createTroTheme({ design }).palette.primary.main).to.equal('#245C46');
    expect(dark.palette.primary.main).to.equal('#A4DDB5');
    expect(createTroTheme().palette.primary.main).to.equal('#252422');
  });

  it('keeps ordinary MUI overrides as the final project escape hatch', () => {
    const theme = createTroTheme({
      design: { controlRadius: 4, colors: { light: { action: '#245C46' } } },
      palette: { primary: { main: '#000000' } },
      components: {
        MuiButton: {
          styleOverrides: { root: { borderRadius: 0 } },
          defaultProps: { variant: 'outlined' },
        },
      },
    });
    expect(theme.palette.primary.main).to.equal('#000000');
    expect(theme.components?.MuiButton?.styleOverrides?.root).to.include({ borderRadius: 0 });
    expect(theme.components?.MuiButton?.defaultProps?.variant).to.equal('outlined');
    expect(theme.components?.MuiOutlinedInput?.styleOverrides?.root).to.include({
      borderRadius: 4,
    });
  });
});
