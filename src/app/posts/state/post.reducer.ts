import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./post.actions";
import { initialState } from './posts.state'
const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const updatePost = state.posts.map((post) => action.post.id === post.id ? action.post : post)
        return {
            ...state,
            posts: updatePost
        }
    }),
    on(deletePost, (state, action) => {
        const updatePost = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts: updatePost
        }
    }))

export function postReducer(state, action) {
    return _postReducer(state, action);
}