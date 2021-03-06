import { FC, useCallback, useState } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import Highlight from '../../atoms/highlight/Highlight';
import Icon from '../../atoms/icon/Icon';
import { TextualWeights } from '../../atoms/text';
import Text from '../../atoms/text/Text';
import {
  containerStyles,
  descriptionStyles,
  categoryStyles,
  descriptionContainerStyles,
  toggleOpenStyles,
} from './styles';
import './styles.css';
import { CommandType, EntryType } from './types';

export interface EntryProps extends FlexProps, EntryType {
  slash?: boolean;
  open?: boolean;
  onOpen: () => void;
  onSelect: () => void;
  search?: string;
  selected?: boolean;
}

const Entry: FC<EntryProps> = ({
  slash = false,
  open = false,
  selected = false,
  // highlights,
  search,
  onOpen,
  onSelect,
  command,
  commandType = CommandType.function,
  params = [],
  description,
  score,
  category,
}) => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  return (
    <Flex
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      flexDirection="row"
      width="100%"
      style={containerStyles(theme, hover || open, selected)}
      onClick={onSelect}
    >
      <Text.Copy weight={TextualWeights.bold} color={theme.colors.salmon[600]}>
        {slash ? '/' : ''}
      </Text.Copy>
      <Flex flexDirection="column" width="98%">
        <Flex
          // className="sticky"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex>
            <Text.Copy weight={TextualWeights.semibold}>
              <Highlight search={search}>{command}</Highlight>
            </Text.Copy>
            <Text.Copy weight={TextualWeights.regular}>
              {commandType === CommandType.inline
                ? params.join(', ')
                : `(${params.join(', ')})`}
            </Text.Copy>
          </Flex>
          <Flex onClick={onOpen} style={toggleOpenStyles(theme)}>
            <Icon
              icon={open ? 'arrow_up' : 'arrow_down'}
              width={15}
              height={15}
              viewBox="0 0 20 20"
            />
          </Flex>
        </Flex>
        <Flex style={descriptionContainerStyles}>
          <Text.CopySmall
            color={theme.palette.alpha[700]}
            style={descriptionStyles(open)}
          >
            <Highlight search={search}>{description}</Highlight>
          </Text.CopySmall>
          {score && <Text.CopySmall>{score.toFixed(3)}</Text.CopySmall>}
        </Flex>
        <Flex style={categoryStyles}>
          <Text.CopySmall
            weight={TextualWeights.regular}
            color={theme.colors.salmon[600]}
          >
            {category}
          </Text.CopySmall>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Entry;
