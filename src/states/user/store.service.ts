import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { map, tap } from 'rxjs';
import { UserApiService } from './api.service';
import { UserStore } from './store';

export type UsersParams = { q: string; per_page: number; page: number };

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  constructor(
    private userStore: UserStore,
    private userApiService: UserApiService
  ) {}

  search(searchParams: UsersParams) {
    return this.userApiService.search(searchParams).pipe(
      map((response) => {
        console.log('reepponse from server');
        console.log(response);
        const { total_count, items } = response;
        // assuming we only need three fields
        const trimmedItems = items.map((item) => {
          const { login, avatar_url, html_url } = item;
          return { login, avatar_url, html_url };
        });
        return {
          searchStr: searchParams.q,
          total_count,
          items: trimmedItems,
        };
      }),
      tap((users: any) => {
        this.userStore.set(users);
        console.log(this.userStore.getValue());
      })
    );
  }
}
