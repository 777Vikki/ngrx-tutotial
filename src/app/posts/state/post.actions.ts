import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

export enum PostActions {
    ADD = '[posts page] add post',
    UPDATE = '[posts page] update post',
    DELETE = '[posts page] delete post'
}

export const addPost = createAction(PostActions.ADD, props<{post: Post}>());
export const updatePost = createAction(PostActions.UPDATE, props<{post: Post}>());
export const deletePost = createAction(PostActions.DELETE, props<{id: string}>());