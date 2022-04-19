import { CSSProperties } from 'react';
import { Theme } from '../../../theme/types';

export const containerStyles = (
  theme: Theme,
  hover: boolean,
  selected: boolean,
): CSSProperties => ({
  backgroundColor:
    hover || selected ? theme.palette.alpha[100] : theme.palette.white,
  padding: theme.spacing.sizes.medium,
  // position: 'sticky',
  // top: 0
});

export const descriptionStyles = (hover: boolean): CSSProperties => {
  return hover
    ? {
        // minHeight: '100px',
        // transition: 'height .5s',
      }
    : {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // height: '30px',
      };
};
export const descriptionContainerStyles = { gap: 10 } as CSSProperties;
export const categoryStyles = { justifyContent: 'flex-end' } as CSSProperties;

export const toggleOpenStyles = (
  theme: Theme,
  hover?: boolean,
): CSSProperties => ({
  cursor: 'pointer',
  ...(hover && { background: theme.palette.alpha[200] }),
  paddingLeft: '2px',
  paddingRight: '5px',
  paddingTop: '3px',
  borderRadius: theme.shape.borderRadius.large,
});
