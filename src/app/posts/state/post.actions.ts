import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

export enum PostActions {
    ADD_POST_ACTION = '[posts page] add post',
    UPDATE_POST_ACTION = '[posts page] update post',
}

export const addPost = createAction(PostActions.ADD_POST_ACTION, props<{post: Post}>());
export const updatePost = createAction(PostActions.UPDATE_POST_ACTION, props<{post: Post}>());
