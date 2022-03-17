import { RatedEntry } from '../../utils/rate';

export const enrichedEntries = [
  {
    command: 'command0',
    params: ['param1', 'param2'],
    description: 'un, culo, dos, tres',
    highlights: [
      {
        property: 'description',
        start: 4,
        end: 8,
      },
    ],
    score: 0.33,
  },
  {
    command: 'command1',
    params: ['param1'],
    description: 'caca, un, dos, tres',
    highlights: [],
  },
  {
    command: 'command2',
    params: ['param1', 'param2'],
    description: 'pedo, un, dos, tres',
    highlights: [],
  },
  {
    command: 'command3',
    params: ['param1', 'param2'],
    description: 'pis, un, dos, tres',
    highlights: [],
  },
] as RatedEntry[];
