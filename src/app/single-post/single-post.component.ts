import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postList: {} ;
  id: number;

  /**
   * Pagination config
   */
  page = 1;
  items = 5;

  constructor( private apiService: ApiService ) {
  }

  ngOnInit() {
    this.getPosts();
  }

  /**
   * Get list of posts
   */
  getPosts() {
    return this.apiService.getList().subscribe(
      (response) => {
        this.postList = response.posts;
        const length = Object.keys(this.postList).length;
        for (let i = 0; i < length; i++) {
          this.id = this.postList[i].ID;
        }
      });
  }
}
