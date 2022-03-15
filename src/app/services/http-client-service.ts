import {Service} from './service';
import {environment} from '../../environments/environment';

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
  constructor(
    protected endpointName?: string) {
  }

  protected getFileTypeApiUrl(): string {
    return this.baseApiUrl + '/' + this.endpointName;
  }

  protected apiFetch<T>(url: string, method?: string, body?: any): Promise<T> {
    return fetch(url, {
      method: method ?? 'GET',
      body: body ?? null
    }).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
      });

  }

  public create<T>(elem: T): Promise<T>
  {
    const body = JSON.stringify(elem);
    return this.apiFetch(this.getFileTypeApiUrl(), 'POST', body);
  }

  public createFile<T>(elem: T, file: File): Promise<T>
  {
    const elemStr = JSON.stringify(elem);
    const formData = new FormData();
    formData.append('metadata', elemStr);
    formData.append('file', file, file.name);
    return this.apiFetch(this.getFileTypeApiUrl(), 'POST', formData);
  }

  public getAll<T>(): Promise<T>
  {
    return this.apiFetch<T>(this.getFileTypeApiUrl());
  }

  public getById<T>(id: string): Promise<T>
  {
    return this.apiFetch<T>(this.getFileTypeApiUrl() + `/${id}`);
  }
}
