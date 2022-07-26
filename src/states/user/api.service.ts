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
          Accept: 'application/vnd.github+json',
          Authorization: 'token ' + environment.token,
        },
      }
    );
  }
}
