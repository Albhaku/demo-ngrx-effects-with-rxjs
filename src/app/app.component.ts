import { Component, OnInit } from '@angular/core';
import { Post } from './app.interface';
import { Store, select } from '@ngrx/store';
import { AppState, selectPosts } from './app.state';
import { getAllPosts } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  posts: Post[];

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.store$.dispatch(getAllPosts());

    this.store$.pipe(
      select(selectPosts)
    ).subscribe(posts => {
      this.posts = posts;
    });
  }
}
