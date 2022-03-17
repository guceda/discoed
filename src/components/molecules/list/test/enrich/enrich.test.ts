import { EntryProperties } from '../../../entry/types';
import enrich from '../../utils/enrich';
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
