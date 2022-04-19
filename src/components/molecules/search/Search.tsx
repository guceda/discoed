import { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Blink from '../../atoms/blink/Blink';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import Input from '../../atoms/input/Input';
import { searchStyles } from './styles';

export interface SearchProps extends FlexProps {
  searching: boolean;
  setSearch: (search: string) => void;
}

const Search: FC<SearchProps> = ({ searching, setSearch }) => {
  const theme = useTheme();
  return (
    <Flex style={searchStyles(theme)} width="100%">
      <Input
        icon="search"
        onChange={setSearch}
        placeholder="find an operation... ⌘+P"
      />
      {searching && <Blink />}
    </Flex>
  );
};

export default Search;
