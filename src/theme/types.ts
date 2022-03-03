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

export enum Ranges {
	'_50'= '50',
	'_100'= '100',
	'_200'= '200',
	'_300'= '300',
	'_400'= '400',
	'_500'= '500',
	'_600'= '600',
	'_700'= '700',
	'_800'= '800',
	'_900'= '900',
	'_1000'= '1000',
}

export type ColorRange = {
	[key in Ranges]: Color;
}

export type Size = {
	[key in Sizes]: number;
}

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
	}
	fonts: {
		rem: Rem;
		sizes: Size;
		family: string;
	}
	shape: {
		borderRadius: Size;
	}
	colors: {
		[key: string]: ColorRange;
	}
	palette: {
		white: Color;
		black: Color;
	}
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
	}
}