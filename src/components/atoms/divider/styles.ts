import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = {
  height: '100%',
  width: '4px',
  alignItems: 'center',
  cursor: 'ew-resize',
} as CSSProperties;

export const barStyles = (theme: Theme): CSSProperties => ({
  height: '120px',
  width: '4px',
  borderRadius: theme.shape.borderRadius.large,
  backgroundColor: theme.palette.white,
});
