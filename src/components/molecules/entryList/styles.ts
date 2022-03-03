import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  width: '500px',
  maxHeight: '350px',
  borderRadius: theme.shape.borderRadius.xxsmall,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
});

export const contentStyles = (theme: Theme): CSSProperties => ({
  padding: theme.spacing.sizes.medium,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
});

export const searchStyles = (theme: Theme): CSSProperties => ({
  paddingTop: theme.spacing.sizes.medium,
  paddingRight: theme.spacing.sizes.medium,
  paddingLeft: theme.spacing.sizes.medium,
});
