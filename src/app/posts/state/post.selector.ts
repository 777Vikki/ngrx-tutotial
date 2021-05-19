import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { StateList } from '../../store/state.enum';
import { PostsState } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>(StateList.POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = createSelector(getPostsState, (state, props) => state.posts.find((post) => post.id === props.id)
);