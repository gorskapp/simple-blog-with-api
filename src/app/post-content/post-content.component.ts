import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  /**
   * ID from URL
   */
  id: number;

  /**
   * Simple dictionary
   */
  commentsHeader = 'Comments';
  likedBy = 'Liked by';
  people = 'people';
  buttonGoBack = 'Go back';

  /**
   * Post content data
   */
  author: string;
  content: string;
  date: Date;
  thumbnail: string;
  title: string;

  /**
   * Comments data
   */
  comments: {};
  counter: number;


  constructor( private route: ActivatedRoute,
               private apiService: ApiService
              ){ }

  ngOnInit(): void {
    /**
     * Get ID from link, convert it to number
     */
    const id = this.route.snapshot.paramMap.get('id');
    this.id = Number(id);
    this.getSinglePost(this.id);
    this.getCommentsForSinglePost(this.id);
  }

  /**
   * Get single post
   * @param id
   */
  getSinglePost(id: number) {
    return this.apiService.getSinglePost(id).subscribe(
      (response) => {
        this.author = response.author.name;
        this.content = response.content;
        this.date = response.date;
        this.thumbnail = response.post_thumbnail.URL;
        this.title = response.title;
      });
  }

  /**
   * Get comments for single post
   * @param id
   */
  getCommentsForSinglePost(id: number) {
    return this.apiService.getCommentsFofSinglePost(id).subscribe(
      (response) => {
        this.comments = response.comments;
        this.counter = response.found;
      });
  }

}
