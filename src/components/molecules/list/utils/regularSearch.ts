import { EntryProperties } from '../../entry/types';
import { EntryListProps } from '../../entryList/EntryList';
import enrich from './enrich';
import filter from './filter';
import rate, { RatedEntry } from './rate';
import sort from './sort';

const regularSearch = (
  entries: EntryListProps['entries'],
  searchProps: EntryProperties[],
  search: string,
): RatedEntry[] => {
  const enrichedEntries = enrich(entries, searchProps, search);
  const filteredEntries = filter(enrichedEntries, !!search);
  const ratedEntries = rate(filteredEntries);
  const sortedEntries = sort(ratedEntries);
  return sortedEntries;
};

export default regularSearch;
