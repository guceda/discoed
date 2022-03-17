import { EntryType } from '../components/molecules/entry/types';
import BaseApiService from './BaseApiService';
import { RequestType } from './types';
import { prepareEntries } from './utils';

export interface SearchItem {
  object: string;
  document: number;
  score: number;
  text: string;
  metadata: string;
}

export interface SearchResult {
  data: SearchItem[];
  model: string;
  object: string;
}

export interface RawSearchResult {
  object: string;
  document: number;
  score: number;
  text: string;
  metadata: string;
}

export interface RawSearch {
  data: RawSearchResult[];
}

export interface ApiEntry {
  text: string;
  metadata: string;
}

interface TrainResult {
  status: 'down' | 'iddle' | 'training' | 'ready' | 'searching';
}

class SemanticSearchService extends BaseApiService {
  static train = async (entries: EntryType[]): Promise<TrainResult> => {
    const preparedEntries = prepareEntries(entries);

    const { data } = await SemanticSearchService.request<TrainResult>({
      url: 'train',
      type: RequestType.post,
      data: JSON.stringify({ entries: preparedEntries }),
    });
    return data;
  };

  static search = async (query: string): Promise<SearchItem[]> => {
    const { data } = await SemanticSearchService.request<RawSearch>({
      url: `search?query=${query}`,
      type: RequestType.get,
    });
    return data.data;
  };
}

export default SemanticSearchService;
