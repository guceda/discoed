import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  padding: theme.spacing.sizes.large,
  backgroundColor: theme.palette.white,
});
