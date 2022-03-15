import React, { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex from '../flex/Flex';

import { dotStyles } from './styles';
import './animation.css';

const Blink: FC = ({ ...props }) => {
  const theme = useTheme();
  return (
    <Flex alignItems="center">
      <Flex className="dot" {...props} as="span" style={dotStyles(theme)} />
    </Flex>
  );
};

export default Blink;
