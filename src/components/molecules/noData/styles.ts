import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.white,
  padding: theme.spacing.sizes.medium,
});

export const descriptionStyles = (theme: Theme): CSSProperties => ({
  marginTop: theme.spacing.sizes.small,
  textAlign: 'center',
});
