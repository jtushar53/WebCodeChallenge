import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  getInitialEntitiesState,
  ActiveState,
} from '@datorama/akita';
import { UserSearchList } from './model';

export interface UserState extends EntityState<UserSearchList>, ActiveState {}

const initialState = {
  ...getInitialEntitiesState(),
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'users' })
export class UserStore extends EntityStore<ListsState, UserSearchList> {
  constructor() {
    super(initialState);
  }
}
