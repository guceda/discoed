import axios, { AxiosPromise } from 'axios';
import { RequestType } from './types';

export interface KeyValue {
  [key: string]: string | boolean;
}

export interface RequestParamsInterface {
  url?: string;
  type?: RequestType;
  params?: KeyValue;
  data?: any;
  headers?: KeyValue;
}

class BaseApiService {
  static getHeaders(headers: KeyValue = {}): KeyValue {
    return {
      ...headers,
      Accept: 'application/json, text/plain, */*',
    };
  }

  static getUrl(uri = ''): string {
    return `${process.env.REACT_APP_SEMANTIC_SEARCH_BASE_API}${uri}`;
  }

  static request<R = undefined>(
    params: RequestParamsInterface,
  ): AxiosPromise<R> {
    return axios.request({
      ...params,
      url: BaseApiService.getUrl(params.url),
      headers: BaseApiService.getHeaders(params.headers),
      method: params.type,
    });
  }
}

export default BaseApiService;
