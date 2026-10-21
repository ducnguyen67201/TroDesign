import { TroDesignOptions } from '@mui/material/styles';

/** Copy this file into a new project. This is its only brand setup file. */
export const projectDesign = {
  name: 'Tro',
  collection: 'Open World',
  logo: '/TroMark.png',
  design: {
    // Empty means Tro defaults. Add only the values this project changes.
    colors: { light: {}, dark: {} },
    fontFamily: 'Arial, Helvetica, sans-serif',
    controlRadius: 12,
    cardRadius: 20,
  } satisfies TroDesignOptions,
};

/** A second project proves the same components can use a different identity. */
export const exampleDesign = {
  name: 'Fieldwork',
  collection: 'A new project',
  logo: '',
  design: {
    colors: {
      light: {
        canvas: '#F4F7F2',
        surface: '#FFFFFF',
        text: '#18382E',
        muted: '#52675E',
        action: '#245C46',
        onAction: '#FFFFFF',
        accent: '#E6C85C',
        onAccent: '#18382E',
        focus: '#17674B',
        selected: '#DCEDE2',
        border: '#C9D8CD',
        controlBorder: '#6F887A',
        tableHead: '#EAF1E9',
      },
      dark: {
        canvas: '#101F19',
        surface: '#1B3026',
        text: '#E5F1E9',
        muted: '#B4CDBD',
        action: '#A4DDB5',
        onAction: '#10271B',
        accent: '#E6C85C',
        onAccent: '#18382E',
        focus: '#A4DDB5',
        selected: '#294D39',
        border: '#48614F',
        controlBorder: '#8AA995',
        tableHead: '#243D2E',
      },
    },
    fontFamily: 'Georgia, serif',
    headingFontFamily: 'Georgia, serif',
    controlRadius: 4,
    cardRadius: 8,
    dialogRadius: 12,
    smallRadius: 4,
    controlHeight: 48,
    spacingUnit: 9,
  } satisfies TroDesignOptions,
};
