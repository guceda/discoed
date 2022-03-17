import { FC, useEffect, useState } from 'react';
import SemanticSearchService from '../../../services/SemanticSearchService';
import { FlexProps } from '../../atoms/flex/Flex';
import { EntryProps } from '../entry/Entry';
import { EntryProperties } from '../entry/types';
import EntryList, { EntryListProps } from '../entryList/EntryList';
import useDebounce from '../entryList/hooks/useDebounce';
import { HighLightedEntry } from './utils/enrich';
import filter from './utils/filter';
import regularSearch from './utils/regularSearch';
import sort from './utils/sort';
import { RatedEntry } from './utils/rate';

export interface ListProps extends FlexProps {
  entries: Omit<EntryProps, 'onOpen' | 'open'>[];
}

export const SEARCH_PROPS = ['command', 'description'] as EntryProperties[];

const List: FC<ListProps> = ({ entries }) => {
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [filteredEntries, setFilteredEntries] = useState<
    EntryListProps['entries'] | HighLightedEntry[]
  >(entries);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch === '') {
      setFilteredEntries(entries);
      return;
    }
    setSearching(true);
    const ratedEntries = regularSearch(entries, SEARCH_PROPS, debouncedSearch);
    const filteredEntries = filter(ratedEntries, !!debouncedSearch);
    const sortedEntries = sort(filteredEntries);

    if (sortedEntries.length) {
      setSearching(false);
      setFilteredEntries(sortedEntries);
      return;
    }

    // SEMANTIC SEARCH
    (async () => {
      console.log('Model: searching');
      SemanticSearchService.search(debouncedSearch)
        .then((results) => {
          console.log('Model: ready');
          const sorted = results.sort((a, b) => b.score - a.score);
          const matchingEntries = sorted.map((res) => ({
            ...entries.find((entry) => entry.command === res.metadata),
            score: res.score,
          })) as RatedEntry[];
          const sortedEntries = sort(matchingEntries);
          const filteredEntries = filter(sortedEntries, !!debouncedSearch);
          setSearching(false);
          setFilteredEntries(filteredEntries);
        })
        .catch((err) => {
          console.log('Model: error');
          console.log(err);
          setSearching(false);
          setFilteredEntries([] as EntryListProps['entries']);
        });
    })();
  }, [debouncedSearch, entries, setFilteredEntries]);

  return (
    <EntryList
      entries={filteredEntries}
      searching={searching}
      search={debouncedSearch}
      setSearch={setSearch}
    />
  );
};

export default List;
