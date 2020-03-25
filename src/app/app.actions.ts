import { createAction, props } from '@ngrx/store';

import { Post } from './app.interface';

export const getAllPosts = createAction('[App] Load all posts');
export const setPosts = createAction('[App] Set posts in state', props<{ posts: Post[] }>());

// export const getComments = createAction()
