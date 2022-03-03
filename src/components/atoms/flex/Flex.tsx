import { FC, HTMLProps } from 'react';

type Global = 'inherit' | 'initial' | 'revert' | 'unset';
type Alignment = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
type Distribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

export interface FlexProps extends HTMLProps<HTMLDivElement> {
  // FLEX
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | Global;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | Global;
  justifyContent?:
    | 'left'
    | 'right'
    | 'normal'
    | Distribution
    | Global
    | Alignment;
  alignItems?: Alignment | Global;
  alignContent?: Alignment | Distribution | Global;
  flexGrow?: number | Global;
  flexShrink?: number | Global;
  gap?: number;
  // SIZE
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  // CHILDREN
  children?: any;
}

const Flex: FC<FlexProps> = ({
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  flexGrow,
  flexShrink,
  gap,
  width,
  maxWidth,
  height,
  maxHeight,
  children,
  style,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        flexGrow,
        flexShrink,
        width,
        maxWidth,
        height,
        maxHeight,
        gap: `${gap}px`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
