import { RatedEntry } from './rate';

export default (entries: RatedEntry[]) => {
  return entries.sort((a, b) => b.score - a.score);
};
