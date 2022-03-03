import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  width: '500px',
  height: '100%',
  borderRadius: theme.shape.borderRadius.xxsmall,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
});

export const contentStyles = (theme: Theme): CSSProperties => ({
  padding: theme.spacing.sizes.medium,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
  height: '100%',
});

export const searchStyles = (theme: Theme): CSSProperties => ({
  paddingTop: theme.spacing.sizes.medium,
  paddingRight: theme.spacing.sizes.medium,
  paddingLeft: theme.spacing.sizes.medium,
});