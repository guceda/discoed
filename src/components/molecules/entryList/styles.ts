import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  padding: theme.spacing.sizes.medium,
  width: '500px',
  borderRadius: theme.shape.borderRadius.xxsmall,
})