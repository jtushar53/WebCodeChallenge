import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { UserApiService } from '../states/user/api.service';
import { UserQuery } from '../states/user/store.query';
import { UserStoreService } from '../states/user/store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchField: FormControl = new FormControl();
  searchResults$: Observable<any[]>;
  constructor(private userStoreService: UserStoreService) {}

  ngOnInit() {
    this.searchResults$ = this.searchField.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      switchMap((searchString) => {
        if (!searchString) {
          return of({ items: [] });
        }
        const searchQueryParams = {
          q: searchString,
          per_page: 20,
          page: 0,
        };
        return this.userStoreService.search(searchQueryParams);
      }),
      map((results: any) => results.items)
    );
  }
  openUserProfile(user) {
    window.open(user.html_url);
  }
}
