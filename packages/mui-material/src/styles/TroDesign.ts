import tokens from './TroTokens';

/** Semantic roles shared by components and custom application surfaces. */
export interface TroDesignColors {
  canvas: string;
  surface: string;
  text: string;
  muted: string;
  action: string;
  onAction: string;
  accent: string;
  onAccent: string;
  focus: string;
  selected: string;
  border: string;
  controlBorder: string;
  success: string;
  error: string;
  warning: string;
  tableHead: string;
}

/** A project supplies only the values it wants to change from Tro's defaults. */
export interface TroDesignOptions {
  colors?:
    | { light?: Partial<TroDesignColors> | undefined; dark?: Partial<TroDesignColors> | undefined }
    | undefined;
  fontFamily?: string | undefined;
  headingFontFamily?: string | undefined;
  controlRadius?: number | undefined;
  cardRadius?: number | undefined;
  dialogRadius?: number | undefined;
  smallRadius?: number | undefined;
  controlHeight?: number | undefined;
  spacingUnit?: number | undefined;
}

const lightColors: TroDesignColors = {
  canvas: tokens.cream,
  surface: tokens.white,
  text: tokens.ink,
  muted: tokens.muted,
  action: tokens.ink,
  onAction: tokens.cream,
  accent: tokens.orange,
  onAccent: tokens.ink,
  focus: tokens.blue,
  selected: tokens.selected,
  border: tokens.border,
  controlBorder: tokens.controlBorder,
  success: tokens.success,
  error: tokens.error,
  warning: '#805500',
  tableHead: '#F3F1E8',
};

const darkColors: TroDesignColors = {
  canvas: '#1B1A18',
  surface: '#302E2A',
  text: tokens.cream,
  muted: '#CCC5B9',
  action: tokens.cream,
  onAction: '#1B1A18',
  accent: tokens.orange,
  onAccent: tokens.ink,
  focus: '#A8B8FF',
  selected: '#303955',
  border: '#625E57',
  controlBorder: '#918A7F',
  success: '#A9D7BA',
  error: '#FFB4AB',
  warning: '#F1D18A',
  tableHead: tokens.ink,
};

/** Resolve a fresh configuration without mutating project settings or other themes. */
export function resolveTroDesign(options: TroDesignOptions = {}, mode: 'light' | 'dark' = 'light') {
  return {
    colors: { ...(mode === 'dark' ? darkColors : lightColors), ...options.colors?.[mode] },
    fontFamily: options.fontFamily ?? tokens.fontFamily,
    headingFontFamily: options.headingFontFamily ?? options.fontFamily ?? tokens.fontFamily,
    controlRadius: options.controlRadius ?? tokens.controlRadius,
    cardRadius: options.cardRadius ?? tokens.cardRadius,
    dialogRadius: options.dialogRadius ?? 24,
    smallRadius: options.smallRadius ?? 8,
    controlHeight: options.controlHeight ?? tokens.targetHeight,
    spacingUnit: options.spacingUnit ?? 8,
  };
}
