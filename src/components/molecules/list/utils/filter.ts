import { HighLightedEntry } from './enrich';

export default (entries: HighLightedEntry[], hasSearch: boolean) => {
  return hasSearch
    ? entries.filter((entry) => entry.highlights.length > 0)
    : entries;
};
