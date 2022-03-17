import { EntryType } from '../components/molecules/entry/types';

export default [
  {
    command: 'atan',
    params: ['number1', 'number2'],
    shortDescription: 'arc tangent',
    commandAction: 'create column',
    description:
      'Creates a new column that returns the arc tangent of the values of a numeric field. When applied with two arguments, it returns the arc tangent of the specified x- and y-coordinates.',
  },
  {
    command: 'rshift',
    params: ['number1', 'number2'],
    shortDescription: 'Bitwise unsigned right shift',
    commandAction: 'create column',
    description:
      'Creates a new column that shifts to the right the bits of the values in the first argument as many positions as specified in the second argument. This operation always fills vacant places after shifting with zeros, so the sign of the original number may vary. Use Bitwise right shift (rshift, >>) if you want to preserve the sign of the original number.',
  },
  {
    command: 'has',
    params: ['string_general'],
    shortDescription: 'filter',
    commandAction: 'create column',
    description:
      'Checks for the presence of one or more values in a given string. The filter will identify those strings containing at least one of the indicated values. Create column - Creates a Boolean column that shows true when at least one of the indicated values is present in the given string. If you enter your query using LINQ, note that the -> operator syntax does not admit more than two arguments. Use the has() syntax if you need to add more than one value. This operation is case sensitive. Use the Contains - case insensitive (weakhas) operation if you need to apply this filter ignoring case.',
  },
  {
    command: 'weakhas',
    params: ['string_general'],
    shortDescription: 'contains - case insensitive',
    commandAction: 'create column',
    description:
      'Returns only those strings that contain a specified value, ignoring case. Create column - Creates a Boolean column that shows true when the indicated value is present in the given string, ignoring case. Use the Contains (has, ->) operation if you need to discriminate between uppercase and lowercase letters.',
  },
  {
    command: 'alsoluteuri',
    params: ['string'],
    shortDescription: 'Absolute URI',
    commandAction: 'create column, filter',
    description:
      'Filter - Retrieves only absolute URIs from a specified field. Create column - Creates a Boolean column that shows true if a given URI is absolute.',
  },
  {
    command: 'damerau',
    params: ['string', 'string'],
    shortDescription: 'Edit distance: Damerau',
    commandAction: 'create column',
    description:
      'Create column - Creates a new column that returns the Damerau distance between two strings.',
  },
  {
    command: 'hamming',
    params: ['string', 'string'],
    shortDescription: 'Edit distance: Hamming',
    commandAction: 'create column',
    description:
      'Create column - Creates a new column that returns the Hamming distance between two strings.',
  },
  {
    command: 'levenshtein',
    params: ['string', 'string'],
    shortDescription: 'Edit distance: Levenshtein',
    commandAction: 'create column',
    description:
      'Create column - Creates a new column that returns the Levenshtein distance between two strings.',
  },
  {
    command: 'osa',
    params: ['string', 'string'],
    shortDescription: 'Edit distance: Osa',
    commandAction: 'create column',
    description:
      'Create column - Creates a new column that returns the Osa distance between two strings.',
  },
] as EntryType[];
