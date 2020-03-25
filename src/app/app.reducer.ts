import { createReducer, Action, on } from '@ngrx/store';
import { initialAppState, AppState } from './app.state';

import { setPosts } from './app.actions';

const reducer = createReducer(initialAppState,
  on(setPosts, (state, action) => ({
    ...state,
    posts: action.posts
  }))
);

export function appReducer(state: AppState, action: Action) {
  return reducer(state, action);
}
