import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  padding: theme.spacing.sizes.medium,
  width: '500px',
  maxHeight: '350px',
  borderRadius: theme.shape.borderRadius.xxsmall,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
});
