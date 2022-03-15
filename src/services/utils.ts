import { EntryType } from '../components/molecules/entry/types';
import { ApiEntry } from './SemanticSearchService';

export const prepareEntries = (entries: EntryType[]) =>
  entries.map(
    (entry) =>
      ({
        text: Object.values(entry).join(' - '),
        metadata: entry.command,
      } as ApiEntry),
  ) as ApiEntry[];
