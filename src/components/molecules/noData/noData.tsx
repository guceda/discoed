import { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import { TextualWeights } from '../../atoms/text';
import Text from '../../atoms/text/Text';
import { containerStyles, noDataStyles, descriptionStyles } from './styles';

export interface NoDataProps extends FlexProps {
  message?: string;
}

const NoData: FC<NoDataProps> = ({ message }) => {
  const theme = useTheme();
  return (
    <Flex style={containerStyles(theme)}>
      <Flex style={noDataStyles}>
        <Text.H6 weight={TextualWeights.bold} color={theme.colors.salmon[300]}>
          /
        </Text.H6>
        <Text.H6
          weight={TextualWeights.semibold}
          color={theme.colors.alpha[700]}
        >
          no data
        </Text.H6>
      </Flex>
      <Text.Copy
        color={theme.palette.alpha[700]}
        style={descriptionStyles(theme)}
      >
        {message ||
          'We could not find anything with the current search. Please try again.'}
      </Text.Copy>
    </Flex>
  );
};

export default NoData;
