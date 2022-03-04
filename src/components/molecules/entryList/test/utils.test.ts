import { EntryProperties } from '../../entry/types';
import enrich from '../utils/enrich';
import filter from '../utils/filter';
import { enrichedEntries, entries } from './mockdata';

test('enrich with highlights', () => {
  expect(
    enrich(
      entries,
      ['command', 'params', 'description'] as EntryProperties[],
      'culo',
    ),
  ).toStrictEqual(enrichedEntries);
});

test('filters right entries', () => {
  expect(
    filter(
      enrich(
        entries,
        ['command', 'params', 'description'] as EntryProperties[],
        'culo',
      ),
      true,
    ),
  ).toStrictEqual([enrichedEntries[0]]);
});
