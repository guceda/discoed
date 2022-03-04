import { FC, memo, useMemo, useState, useCallback } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Entry, { EntryProps } from '../entry/Entry';
import { containerStyles, contentStyles, searchStyles } from './styles';
import * as icons from '../../../assets/icons';
import enrich from './utils/enrich';
import { EntryProperties } from '../entry/types';
import filter from './utils/filter';
import sort from './utils/sort';
import Flex from '../../atoms/flex/Flex';
import Input from '../../atoms/input/Input';
import NoData from '../noData/noData';

const SEARCH_PROPS = ['command', 'description'] as EntryProperties[];

interface EntryListProps {
  entries: Omit<EntryProps, 'onOpen' | 'open'>[];
}

const EntryList: FC<EntryListProps> = ({ entries }) => {
  const theme = useTheme();
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState<number>();

  const handleSearch = useCallback((search: string) => setSearch(search), []);
  const handleOpen = useCallback(
    (idx) => setOpen((curr) => (curr === idx ? null : idx)),
    [],
  );

  const filteredEntries = useMemo(() => {
    const enrichedEntries = enrich(entries, SEARCH_PROPS, search);
    const filteredEntries = filter(enrichedEntries, !!search);
    const sortedEntries = sort(filteredEntries);
    return sortedEntries;
  }, [entries, search]);

  return (
    <Flex flexDirection="column" style={containerStyles(theme)}>
      <Flex style={searchStyles(theme)} width="100%">
        <Input
          icon={icons.search}
          onChange={handleSearch}
          placeholder="find an operation..."
        />
      </Flex>
      <Flex flexDirection="column" style={contentStyles(theme)}>
        <Flex flexDirection="column" height="100%">
          {filteredEntries.length ? (
            filteredEntries.map((entry, idx) => (
              <Entry
                search={search}
                key={entry.command}
                open={open === idx}
                onOpen={() => handleOpen(idx)}
                {...entry}
              />
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
