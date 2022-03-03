import { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex, { FlexProps } from '../flex/Flex';
import { containerStyles } from './styles';

export interface LayoutProps extends FlexProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Flex
      gap={theme.spacing.sizes.xxsmall}
      height="350px"
      style={containerStyles(theme)}
    >
      {children}
    </Flex>
  );
};

export default Layout;
