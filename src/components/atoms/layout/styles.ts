import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.alpha[200],
  padding: theme.spacing.sizes.xsmall,
});
