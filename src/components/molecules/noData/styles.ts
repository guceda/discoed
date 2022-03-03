import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.white,
  padding: theme.spacing.sizes.medium,
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const descriptionStyles = (theme: Theme): CSSProperties => ({
  marginTop: theme.spacing.sizes.small,
  textAlign: 'center',
});

export const noDataStyles = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
} as CSSProperties;
