import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.white,
  padding: theme.spacing.sizes.medium,
})

export const descriptionStyles = {
  // whiteSpace: 'nowrap',
  // overflow: 'hidden',
  // textOverflow: 'ellipsis',
} as CSSProperties;