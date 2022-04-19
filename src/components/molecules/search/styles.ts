import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const searchStyles = (theme: Theme): CSSProperties => ({
  position: 'relative',
  padding: theme.spacing.sizes.medium,
  gap: theme.spacing.sizes.small,
});

export const shortcutStyles = (theme?: Theme): CSSProperties => ({
  position: 'absolute',
  background: theme?.palette.white,
  right: '25px',
  top: '24px',
  padding: '1px 3px',
  borderRadius: theme?.shape.borderRadius.xxsmall,
});
