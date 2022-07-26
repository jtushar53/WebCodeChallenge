import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  getInitialEntitiesState,
  ActiveState,
} from '@datorama/akita';
import { UserList } from './model';

export interface UserState extends EntityState<UserList>, ActiveState {}

const initialState = {
  ...getInitialEntitiesState(),
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'users' })
export class UserStore extends EntityStore<UserState, UserList> {
  constructor() {
    super(initialState);
  }
}
