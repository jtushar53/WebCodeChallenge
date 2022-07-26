export interface UserList {
  total_count: number;
  items: User[];
}

export class User {
  login: string;
  avatar_url: string;
  html_url: string;
}
