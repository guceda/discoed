import { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex from '../flex/Flex';
import { containerStyles, barStyles } from './styles';

const Divider: FC = () => {
  const theme = useTheme();

  return (
    <Flex flexDirection="row" width="100%" style={containerStyles}>
      <Flex style={barStyles(theme)} />
    </Flex>
  );
};

export default Divider;
