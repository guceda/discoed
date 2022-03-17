import { HighLightedEntry } from './enrich';

export interface RatedEntry extends HighLightedEntry {
  score: number;
}

export default (entries: HighLightedEntry[]): RatedEntry[] => {
  return entries.map((entry) => ({ ...entry, score: 0 }));
};
