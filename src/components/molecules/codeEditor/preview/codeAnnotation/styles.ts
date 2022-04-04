import { CSSProperties } from 'react';
import { Theme } from '../../../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  paddingLeft: theme.spacing.sizes.small,
  color: theme.palette.primary.main,
  fontSize: theme.fonts.sizes.xxsmall,
  whiteSpace: 'nowrap',
});

export const buttonStyles = (theme: Theme): CSSProperties => ({
  cursor: 'pointer',
  paddingRight: theme.spacing.sizes.small,
  textDecoration: 'underline',
  color: theme.palette.alpha[500],
});

export const previewStyles = {
  cursor: 'context-menu',
} as CSSProperties;