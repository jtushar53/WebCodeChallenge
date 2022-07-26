import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs';
import { UserApiService } from './api.service';
import { UserStore } from './store';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  constructor(
    private userStore: UserStore,
    private userApiService: UserApiService
  ) {}

  search() {
    return this.userApiService
      .search()
      .pipe(tap((users) => this.userStore.set(users)));
  }
}
