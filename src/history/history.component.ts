import { Component, OnInit } from '@angular/core';
import { UserStore } from '../states/user/store';
import { UserQuery } from '../states/user/store.query';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  recentSearches$;

  constructor(private userQuery: UserQuery, private userStore: UserStore) {}

  ngOnInit() {
    this.recentSearches$ = this.userQuery.selectAll();
  }

  deleteSearch(id) {
    console.log(id);
    this.userStore.remove(id);
  }

  clearAll() {
    this.userStore.reset();
    console.log(this.userStore.getValue());
  }

  openUserProfile(userSearch) {
    console.log(userSearch);
  }
}
