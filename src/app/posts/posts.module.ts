import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { postReducer } from "./state/post.reducer";
import { StateList } from '../store/state.enum';
@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
        CommonModule,
        PostsRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature(StateList.POST_STATE_NAME, postReducer)
    ]
})

export class PostsModule {

}