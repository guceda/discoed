import { FC, HTMLProps, ReactChild } from 'react';

type Global = 'inherit' | 'initial' | 'revert' | 'unset';
type Alignment = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
type Distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

export interface FlexProps extends HTMLProps<HTMLDivElement> {
	// FLEX
	flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | Global;
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | Global;
	justifyContent?: 'left' | 'right' | 'normal' | Distribution | Global | Alignment;
	alignItems?: Alignment | Global;
	alignContent?: Alignment | Distribution | Global;
	flexGrow?: number | Global;
	flexShrink?: number | Global
	// CHILDREN
	children?: ReactChild | ReactChild[],
}

 
const Flex: FC<FlexProps> = ({
  children,
  style,
  ...props
}) => {

  return (
    <div style={{ display: 'flex', ...style, ...props }}>{children}</div>
  );
};


export default Flex;
