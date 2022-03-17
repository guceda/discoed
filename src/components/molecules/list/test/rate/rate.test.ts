import rate from '../../utils/rate';
import { enrichedEntries } from './mockdata';

test('rate entries according to relevance', () => {
  const result = rate(enrichedEntries);
  expect(result[0].command).toEqual('has');
  expect(result[1].command).toEqual('weakhas');
});
