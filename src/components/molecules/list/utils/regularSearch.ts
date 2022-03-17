import { EntryProperties } from '../../entry/types';
import { EntryListProps } from '../../entryList/EntryList';
import enrich from './enrich';
import rate, { RatedEntry } from './rate';

const regularSearch = (
  entries: EntryListProps['entries'],
  searchProps: EntryProperties[],
  search: string,
): RatedEntry[] => {
  const enrichedEntries = enrich(entries, searchProps, search);
  const ratedEntries = rate(enrichedEntries);
  return ratedEntries;
};

export default regularSearch;
