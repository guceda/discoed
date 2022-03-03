export type Color = string;
export type Rem = (number: number) => number;

export enum Sizes {
  'xxsmall' = 'xxsmall',
  'xsmall' = 'xsmall',
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
  'xlarge' = 'xlarge',
  'xxlarge' = 'xxlarge',
}

export type Size = {
  [key in Sizes]: number;
};

export type ColorRange = {
  50: Color;
  100: Color;
  200: Color;
  300: Color;
  400: Color;
  500: Color;
  600: Color;
  700: Color;
  800: Color;
  900: Color;
  1000: Color;
};

export interface PaletteColor {
  highlight: Color;
  main: Color;
  lowlight: Color;
  contrast: Color;
}

export interface ThemeBase {
  spacing: {
    rem: Rem;
    sizes: Size;
  };
  fonts: {
    rem: Rem;
    sizes: Size;
    family: string;
  };
  shape: {
    borderRadius: Size;
  };
  colors: {
    [key: string]: ColorRange;
  };
  palette: {
    white: Color;
    black: Color;
  };
}

export interface Theme extends ThemeBase {
  palette: {
    white: Color;
    black: Color;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    success: PaletteColor;
    alpha: ColorRange;
    text: Color;
  };
}
