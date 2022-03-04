import { Highlight } from '../entryList/utils/enrich';

export enum CommandType {
  'inline' = 'inline',
  'function' = 'function',
}

export enum EntryProperties {
  'command' = 'command',
  'params' = 'params',
  'commandType' = 'commandType',
  'description' = 'description',
  'highlights' = 'highlights',
}

export interface EntryType {
  [EntryProperties.command]: string;
  [EntryProperties.params]?: string[];
  [EntryProperties.commandType]?: CommandType;
  [EntryProperties.description]: string;
  [EntryProperties.highlights]?: Highlight[];
}
