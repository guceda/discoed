import { FC, ReactChild, ReactElement } from 'react';
import { Color, Sizes } from '../../../theme/types';

export enum TextualWeights {
	'thin' = 100,
	'extralight' = 200,
	'light' = 300,
	'regular' = 400,
	'medium' = 500,
	'semibold' = 600,
	'bold' = 700,
	'extrabold' = 800,
	'black' = 900,
}

export interface NestedFC<T> {
	[key:string]: FC<T>;
}

export interface TextProps {
	children: ReactChild
  weight?: TextualWeights,
  italic?: boolean,
  size?: Sizes,
	color?: Color,
}

export type VariantsProps = Omit<TextProps, 'weight' | 'size' | 'marginHorizontal'>

export interface TextFamily extends FC<TextProps> {
	H1: (props: VariantsProps) => ReactElement,
	H2: (props: VariantsProps) => ReactElement,
	H3: (props: VariantsProps) => ReactElement,
	H4: (props: VariantsProps) => ReactElement,
	H5: (props: VariantsProps) => ReactElement,
	H6: (props: VariantsProps) => ReactElement,
	Copy: (props: VariantsProps) => ReactElement,
	CopySmall: (props: VariantsProps) => ReactElement,
	Label: (props: VariantsProps) => ReactElement,
}
