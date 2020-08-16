import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostContentComponent } from './post-content/post-content.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'postContent/:id', component: PostContentComponent },
  { path: 'posts', component: SinglePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
