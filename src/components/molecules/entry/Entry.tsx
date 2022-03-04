import { FC, useCallback, useState } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import Highlight from '../../atoms/highlight/Highlight';
import { TextualWeights } from '../../atoms/text';
import Text from '../../atoms/text/Text';
import { containerStyles, descriptionStyles } from './styles';
import './styles.css';
import { CommandType, EntryType } from './types';

export interface EntryProps extends FlexProps, EntryType {
  slash?: boolean;
  open?: boolean;
  onOpen: () => void;
  search?: string;
}

const Entry: FC<EntryProps> = ({
  slash = true,
  open = false,
  // highlights,
  search,
  onOpen,
  command,
  commandType = CommandType.function,
  params = [],
  description,
}) => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  return (
    <Flex
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      flexDirection="row"
      width="100%"
      style={containerStyles(theme, hover)}
    >
      <Text.Copy weight={TextualWeights.bold} color={theme.colors.salmon[600]}>
        {slash ? '/' : ''}
      </Text.Copy>
      <Flex flexDirection="column" width="100%">
        <Flex
          // className="sticky"
          flexDirection="row"
        >
          <Text.Copy weight={TextualWeights.semibold}>
            <Highlight search={search}>{command}</Highlight>
          </Text.Copy>
          <Text.Copy weight={TextualWeights.regular}>
            {commandType === CommandType.inline
              ? params.join(', ')
              : `(${params.join(', ')})`}
          </Text.Copy>
        </Flex>
        <Text.CopySmall
          color={theme.palette.alpha[700]}
          style={descriptionStyles(open)}
        >
          <Highlight search={search}>{description}</Highlight>
        </Text.CopySmall>
      </Flex>
    </Flex>
  );
};

export default Entry;
