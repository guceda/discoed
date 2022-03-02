export type Color = string;
export type Rem = (number: number) => number;

export interface ColorRange {
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


export interface Sizes {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
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
        sizes: Sizes;
    }
    fonts: {
        rem: Rem;
        sizes: Sizes;
    }
    shape: {
        borderRadius: Sizes;
    }
    colors: {
        [key: string]: ColorRange;
    }
    palette: {
        white: Color;
        black: Color;
    }
};


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
    }
}