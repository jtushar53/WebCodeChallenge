import { ID } from '@datorama/akita';

export interface UserList {
  id: ID;
  search: string;
  total_count: number;
  items: User[];
}

export class User {
  login: string;
  avatar_url: string;
  html_url: string;
}
