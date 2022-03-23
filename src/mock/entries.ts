import { EntryType } from '../components/molecules/entry/types';

const entries = [
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
  {
    command: 'bigInt',
    params: ['number_string'],
    shortDescription: 'To BigInt',
    commandAction: 'create column',
    description:
      'Create column - Converts a valid number string, a float number, an int, a json that contains a valid number, or a MAC address into a big integer number. Note that float numbers are not rounded, so the result will be the integral part. You can also extract an integer value from a json (json data type) using the Jq evaluation (jqeval) operation and convert it into integer type.',
  },
  {
    command: 'bool',
    params: ['json_boolean'],
    shortDescription: 'To boolean',
    commandAction: 'create column',
    description:
      'Create column - Transforms the JSON objects in a specified json field into boolean data type. Note that you must first extract a part of the JSON that represents a Boolean value (true, false) using the Jq evaluation (jqeval) operation.',
  },
  {
    command: 'float',
    params: ['number_string'],
    shortDescription: 'To Float',
    commandAction: 'create column',
    description:
      'Create column - Converts a valid number string or an integer into a float number. You can also extract a float value from a json (json data type) using the Jq evaluation (jqeval) operation and convert it into float type.',
  },
  {
    command: 'image',
    params: ['number_string'],
    shortDescription: 'To image',
    commandAction: 'create column',
    description:
      'Create column - Converts a Base64 string into an image. The string values specified must always be preceded by the pattern extension;base64; where extension is the file extension of the image (for example png, jpg...). For example: png;base64;4AAQskZg...',
  },
  {
    command: 'int',
    params: ['number_string'],
    shortDescription: 'To Int',
    commandAction: 'create column',
    description:
      'Create column - Converts a valid number string, a float number or a MAC address into an integer number. Note that float numbers are not rounded, so the result will be the integral part. You can also extract an integer value from a json (json data type) using the Jq evaluation (jqeval) operation and convert it into integer type.',
  },
] as EntryType[];

export default [
  ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
  // ...entries,
];
