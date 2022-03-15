import React, { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex from '../flex/Flex';
import Text from '../text/Text';

import { dotStyles } from './styles';
import './animation.css';

export interface BlinkProps {
  text?: string;
}

const Blink: FC<BlinkProps> = ({ text, ...props }: BlinkProps) => {
  const theme = useTheme();
  return (
    <Flex alignItems="center">
      <Flex className="dot" {...props} as="span" style={dotStyles(theme)} />
      {text && <Text.CopySmall>{text}</Text.CopySmall>}
    </Flex>
  );
};

export default Blink;
