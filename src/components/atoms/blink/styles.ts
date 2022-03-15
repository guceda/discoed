import { CSSProperties } from 'react';

import { Theme } from '../../../theme/types';

export const dotStyles = (theme: Theme): CSSProperties => ({
  width: '12px',
  height: '12px',
  alignItems: 'center',
  fontFamily: 'Inter',
  borderRadius: '50%',
  userSelect: 'none',
  justifyContent: 'center',
  animation: 'blink 1s infinite',
  backgroundColor: theme.colors.salmon[600],
});
