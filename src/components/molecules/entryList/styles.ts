import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  width: '400px',
  height: '100%',
  borderRadius: theme.shape.borderRadius.xxsmall,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
  position: 'relative',
});

export const contentStyles = (theme: Theme): CSSProperties => ({
  paddingRight: theme.spacing.sizes.medium,
  paddingLeft: theme.spacing.sizes.medium,
  overflow: 'scroll',
  backgroundColor: theme.palette.white,
  height: '100%',
});

export const counterStyles = (theme: Theme): CSSProperties => ({
  position: 'absolute',
  bottom: theme.spacing.sizes.xsmall,
  right: theme.spacing.sizes.xsmall,
  paddingTop: theme.spacing.sizes.xxsmall,
  paddingBottom: theme.spacing.sizes.xxsmall,
  paddingRight: theme.spacing.sizes.xsmall,
  paddingLeft: theme.spacing.sizes.xsmall,
  backgroundColor: theme.palette.white,
  borderRadius: theme.shape.borderRadius.xxsmall,
  filter: `drop-shadow(0px 1px 4px rgba(0,0,0, 0.2))`,
});
