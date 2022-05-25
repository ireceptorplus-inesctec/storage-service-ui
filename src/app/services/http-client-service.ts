import { environment } from '../../environments/environment';

export class HttpClientService<T> {
  /**
   * The base api url
   * Example: https://serveraddr:4200/api/
   */
  baseApiUrl: string = environment.apiUrl;

  /**
   * The name that represents the endpoint name on the API Url.
   * This is used to build the URL, relatively to the main path.
   * Example: dataset.
   * Therefore, the absolute URL built would be: https://serveraddr:4200/api/dataset
   */
  constructor(protected endpointName?: string) {}

  protected getFileTypeApiUrl(): string {
    return this.baseApiUrl + '/' + this.endpointName;
  }

  public async request(url: string, method?: string, body?: any): Promise<any> {
    return fetch(url, {
      method: method ?? 'GET',
      body: body ?? null,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<any>;
    });
  }

  public create(elem: T): Promise<T> {
    const body = JSON.stringify(elem);
    return this.request(this.getFileTypeApiUrl(), 'POST', body);
  }

  public createFile(elem: T, file: File): Promise<T> {
    const elemStr = JSON.stringify(elem);
    const formData = new FormData();
    formData.append('metadata', elemStr);
    formData.append('file', file, file.name);

    return this.request(this.getFileTypeApiUrl(), 'POST', formData);
  }

  public getAll(): Promise<T[]> {
    return this.request(this.getFileTypeApiUrl());
  }

  public getById(id: string): Promise<T> {
    return this.request(this.getFileTypeApiUrl() + `/${id}`);
  }

  public getEndpointName(): string {
    return <string>this.endpointName;
  }
}
