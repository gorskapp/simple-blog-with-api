import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { SinglePostComponent } from './single-post/single-post.component';
import { RouterModule } from '@angular/router';
import { PostContentComponent } from './post-content/post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    PostContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
