import { HttpClient } from '@angular/common/http';
import { BaseApiUrl } from '../../endpoints/endpoints';

export interface SetWrapper<T> {
  value: T[];
}

export interface EntityWrapper<T> {
  value: T;
}

export class BaseService<T> {
  private readonly endpointUrl: string;

  constructor(url: string, protected readonly httpClient: HttpClient) {
    this.endpointUrl = BaseApiUrl + url;
  }
}
