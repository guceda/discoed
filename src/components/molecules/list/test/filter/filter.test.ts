import filter from '../../utils/filter';
import { enrichedEntries } from './mockdata';

test('filters right entries', () => {
  expect(filter(enrichedEntries, true)).toStrictEqual([enrichedEntries[0]]);
});
