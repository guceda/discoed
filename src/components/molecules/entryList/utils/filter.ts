import { EnrichedEntry } from './enrich';

export default (entries: EnrichedEntry[], hasSearch: boolean) => {
  return hasSearch
    ? entries.filter((entry) => entry.highlights.length > 0)
    : entries;
};
