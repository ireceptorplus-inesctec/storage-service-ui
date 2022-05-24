import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

export class FileCreationService<T> {

  baseApiUrl: string = environment.apiUrl;

  constructor(protected endpointName: string, protected httpClient: HttpClient) {
  }

  createFile(elem: T, file: File): Observable<any> {
    const elemStr = JSON.stringify(elem);
    var formData: any = new FormData();
    formData.append('metadata', elemStr);
    formData.append('file', file, file.name);
    return this.httpClient
      .post('http://localhost:4000/api/create-user', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
