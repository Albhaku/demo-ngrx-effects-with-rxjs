import { Injectable } from '@angular/core';
import { mergeMap, map, switchMap, toArray } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AppService } from './app.service';
import { getAllPosts, setPosts } from './app.actions';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppEffects {
  constructor(
    private actions$: Actions,
    private appService: AppService,
  ) { }

  getAllPosts$ = createEffect(() => this.actions$.pipe(
    ofType(getAllPosts),
    mergeMap((action) => this.appService.getPosts().pipe(
      switchMap(posts => from(posts)),
      mergeMap(post => this.appService.getComments(post.id).pipe(
        mergeMap(comments => {
          if (!comments.length) {
            return this.appService.createComment({
              body: 'Comment created from effect',
              id: 6,
              postId: post.id,
            }).pipe(
              map((response) => ({ ...post, comments: [response.comment] }))
            );
          } else {
            return of({ ...post, comments });
          }
        }),
      )),
      toArray(),
      map(posts => setPosts({ posts: posts.sort((post, prev) => post.id - prev.id) }))
    ))
  ));

}
