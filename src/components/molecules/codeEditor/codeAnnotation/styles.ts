import { CSSProperties } from 'react';
import { Theme } from '../../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  paddingLeft: theme.spacing.sizes.small,
  color: theme.palette.primary.main,
  fontSize: theme.fonts.sizes.xxsmall,
  whiteSpace: 'nowrap',
});

export const buttonStyles = (
  theme: Theme,
  // hovered?: boolean,
): any => ({
  cursor: 'pointer',
  paddingRight: theme.spacing.sizes.small,
  textDecoration: 'underline',
  color: theme.palette.alpha[500],
});

export const previewStyles = (
  theme: Theme,
  hovered: boolean,
): CSSProperties => ({
  cursor: 'context-menu',
  color: hovered ? theme.palette.primary.main : theme.palette.primary.highlight,
});
