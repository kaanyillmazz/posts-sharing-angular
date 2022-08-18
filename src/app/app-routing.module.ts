import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent} from "./posts-list/posts-list.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
