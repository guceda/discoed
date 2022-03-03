import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (theme: Theme, hover:boolean): CSSProperties => ({
  backgroundColor: hover ? theme.palette.alpha[100] : theme.palette.white,
  padding: theme.spacing.sizes.medium,
});

export const descriptionStyles = (hover:boolean): CSSProperties => {
  return hover ? {
    height: '100px',
    //transition: 'height .5s',

  } : {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    //height: '30px',
  }
};