import { EntryProperties } from '../../entry/types';
import { EntryListProps } from '../EntryList';
import enrich, { EnrichedEntry } from './enrich';
import filter from './filter';
import sort from './sort';

const regularSearch = (
  entries: EntryListProps['entries'],
  searchProps: EntryProperties[],
  search: string,
): EnrichedEntry[] => {
  const enrichedEntries = enrich(entries, searchProps, search);
  const filteredEntries = filter(enrichedEntries, !!search);
  const sortedEntries = sort(filteredEntries);
  return sortedEntries;
};

export default regularSearch;
