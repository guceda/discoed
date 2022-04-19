import { FC } from 'react';
import useKeydown from '../../../hooks/useKeydown';
import useFocus from '../../../hooks/useFocus';
import { useTheme } from '../../../providers/ThemeProvider';
import Blink from '../../atoms/blink/Blink';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import Input from '../../atoms/input/Input';
import { searchStyles, shortcutStyles } from './styles';
import Text from '../../atoms/text/Text';

export interface SearchProps extends FlexProps {
  searching: boolean;
  setSearch: (search: string) => void;
}

const Search: FC<SearchProps> = ({ searching, setSearch }) => {
  const theme = useTheme();
  const [inputRef, setInputFocus] = useFocus();

  useKeydown(document, 'j', setInputFocus as any, true);

  return (
    <Flex style={searchStyles(theme)} width="100%">
      <Input
        id="search-input"
        icon="search"
        ref={inputRef}
        onChange={setSearch}
        placeholder="find an operation..."
      />
      <Text.Copy style={shortcutStyles(theme)}>⌘+J</Text.Copy>
      {searching && <Blink />}
    </Flex>
  );
};

export default Search;
