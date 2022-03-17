import { RatedEntry } from './rate';

export default (entries: RatedEntry[], hasSearch: boolean) => {
  return hasSearch ? entries.filter((entry) => entry.score > 0) : entries;
};
