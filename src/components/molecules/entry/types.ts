import { Highlight } from '../list/utils/enrich';

export enum CommandType {
  'inline' = 'inline',
  'function' = 'function',
}

export enum EntryProperties {
  'command' = 'command',
  'params' = 'params',
  'commandType' = 'commandType',
  'shortDescription' = 'shortDescription',
  'commandAction' = 'commandAction',
  'description' = 'description',
  'highlights' = 'highlights',
  'score' = 'score',
  'category' = 'category',
}

export interface EntryType {
  [EntryProperties.category]: string;
  [EntryProperties.command]: string;
  [EntryProperties.params]?: string[];
  [EntryProperties.commandType]?: CommandType;
  [EntryProperties.description]: string;
  [EntryProperties.highlights]?: Highlight[];
  [EntryProperties.shortDescription]: string;
  [EntryProperties.commandAction]: 'aggregate' | 'create column';
  [EntryProperties.score]?: number;
}
