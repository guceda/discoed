import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const searchStyles = (theme: Theme): CSSProperties => ({
  padding: theme.spacing.sizes.medium,
  gap: theme.spacing.sizes.small,
});
