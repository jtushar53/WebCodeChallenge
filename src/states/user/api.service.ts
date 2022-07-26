import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}
  search(queryParams): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        'search/users?' +
        new URLSearchParams(queryParams).toString(),
      {
        headers: {
          Accept: '',
          Authorization: 'token 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',
        },
      }
    );
  }
}
