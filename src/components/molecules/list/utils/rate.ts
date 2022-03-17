import { HighLightedEntry } from './enrich';

export interface RatedEntry extends HighLightedEntry {
  score: number;
}

const MAX_SCORE = 100;

export default (entries: HighLightedEntry[]): RatedEntry[] => {
  return entries.map((entry) => {
    let score = 0;

    entry.highlights.forEach((match) => {
      if (match.property === 'description') score += 1;

      if (match.property === 'command') {
        const matchLength = match.end - match.start;
        const leftOutCharacters = entry.command.length - matchLength;
        score += MAX_SCORE - leftOutCharacters;
      }
    });

    return { ...entry, score: score / 100 };
  });
};
