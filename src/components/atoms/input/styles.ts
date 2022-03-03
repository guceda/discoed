import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.alpha[100],
  padding: theme.spacing.sizes.xsmall,
  fontSize: theme.fonts.sizes.xsmall,
  color: theme.palette.text,
  position: 'sticky',
  top: 0,
});

export const iconStyles = (theme: Theme): CSSProperties => ({
  paddingRight: theme.spacing.sizes.xsmall,
  paddingLeft: theme.spacing.sizes.xsmall,
  alignItems: 'center',
});

export const inputStyles = {
  width: '100%',
} as CSSProperties;
