import { colors, white, black } from './colors';
import { Rem, ThemeBase } from './types';

const REM_BASE = 16;

const rem: Rem = (number: number) => number * REM_BASE;

const theme: ThemeBase = {
  spacing: {
    rem,
    sizes: {
      xxsmall: rem(0.25),
      xsmall: rem(0.5),
      small: rem(0.75),
      medium: rem(1),
      large: rem(1.5),
      xlarge: rem(2),
      xxlarge: rem(3),
    },
  },
  fonts: {
    rem,
    sizes: {
      xxsmall: rem(0.75),
      xsmall: rem(1),
      small: rem(1.25),
      medium: rem(1.5),
      large: rem(2),
      xlarge: rem(2.5),
      xxlarge: rem(3.5),
    },
    family: 'Poppins',
  },
  shape: {
    borderRadius: {
      xxsmall: 2,
      xsmall: 4,
      small: 6,
      medium: 8,
      large: 12,
      xlarge: 16,
      xxlarge: 24,
    },
  },
  colors,
  palette: {
    white,
    black,
  },
};

export default theme;