import { FC, memo, useMemo, useState, useCallback } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex from '../../atoms/flex/Flex';
import Input from '../../atoms/input/Input';
import Entry, { EntryProps } from '../entry/Entry';
import NoData from '../noData/noData';
import { containerStyles, contentStyles, searchStyles } from './styles';
import * as icons from '../../../assets/icons';

interface EntryListProps {
  entries: EntryProps[];
}

const EntryList: FC<EntryListProps> = ({ entries }) => {
  const theme = useTheme();
  const [search, setSearch] = useState<string | undefined>();

  const handleSearch = useCallback((search: string) => setSearch(search), []);

  const filteredEntries = useMemo(() => {
    if (!search) return entries;
    // TODO: improve search algorithm
    return entries.filter((entry) => entry.command.includes(search));
  }, [entries, search]);

  return (
    <Flex flexDirection="column" style={containerStyles(theme)}>
      <Flex style={searchStyles(theme)} width="100%">
        <Input
          icon={icons.search}
          onChange={handleSearch}
          placeholder="search an operation..."
        />
      </Flex>
      <Flex flexDirection="column" style={contentStyles(theme)}>
        <Flex flexDirection="column" height="100%">
          {filteredEntries.length ? (
            filteredEntries.map((entry) => (
              <Entry key={entry.command} {...entry} />
            ))
          ) : (
            <NoData />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(EntryList);
