import { Post, Comment } from './app.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  posts: Post[];
  comments: Comment[];
}

export const initialAppState: AppState = {
  posts: [],
  comments: [],
};

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectPosts = createSelector(
  selectAppState,
  state => state.posts
);
