import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { postReducer } from "./post.reducer";
import { PostsState } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = createSelector(getPostsState, (state, props) => state.posts.find((post) => post.id === props.id)
);