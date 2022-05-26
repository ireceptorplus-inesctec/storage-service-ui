import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import {HttpClientService} from "./http-client-service";
import {Injectable} from "@angular/core";

@Injectable()
export class FileCreateService<T> extends HttpClientService<T> {

  constructor(protected httpClient: HttpClient) {
    super();
  }

  public setEndpointName(endpointName: string) {
    this.endpointName = endpointName;
  }

  createFileWithProgressMonitoring(elem: T, file: File, handleErrorFunction: (error: HttpErrorResponse) => any): Observable<any> {
    const elemStr = JSON.stringify(elem);
    var formData: any = new FormData();
    formData.append('metadata', elemStr);
    formData.append('file', file, file.name);
    return this.httpClient
      .post(this.getFileTypeApiUrl(), formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(handleErrorFunction));
  }
}
