import { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex from '../../atoms/flex/Flex';
import { TextualWeights } from '../../atoms/text';
import Text from '../../atoms/text/Text';
import { containerStyles } from './styles';

enum CommandType {
	'inline' = 'inline',
	'function' = 'function',
}

interface EntryProps {
	slash?: boolean,
	search?: string,
	command: string,
	params?: string[],
	commandType?: CommandType,
	description: string,
}

const Entry: FC<EntryProps> = ({
  slash = true,
  //search,
  command,
  commandType = CommandType.function,
  params= [],
  description,
}) => {
  const theme = useTheme();

  return (
    <Flex flexDirection='column' style={containerStyles(theme)}>
      <Flex flexDirection='row'>
        <Text.H6 weight={TextualWeights.bold} color={theme.colors.salmon[600]}>{slash ? '/' : ''}</Text.H6>
        <Text.H6 weight={TextualWeights.semibold}>{command}</Text.H6>
        <Text.H6 weight={TextualWeights.regular}>{commandType === CommandType.inline ? params.join(', ') : `(${params.join(', ')})`}</Text.H6>
      </Flex>
      <Text.Copy color={theme.palette.alpha[700]}>{description}</Text.Copy>
    </Flex>
  );
};

export default Entry;
