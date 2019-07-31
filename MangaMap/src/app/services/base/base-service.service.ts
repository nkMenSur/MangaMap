import { HttpClient } from '@angular/common/http';

export interface SetWrapper<T> {
  value: T[];
}

export interface EntityWrapper<T> {
  value: T;
}

export class BaseService {
  private readonly endpointUrl: string;

  constructor(url: string, protected readonly httpClient: HttpClient) {
    // this.endpointUrl = BaseUrl + url;
  }
}
