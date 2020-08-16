import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostInterface, PostInterfaceItem } from './core/interfaces/post-interface';
import { CommentInterface } from './core/interfaces/comment-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Api address
   */
  private api = 'https://public-api.wordpress.com/rest/v1.1/sites/';
  private posts = '3584907/posts/';

  constructor( private  httpClient: HttpClient ) { }

  /**
   * Get list of posts
   */
  getList() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<PostInterface>(this.api + this.posts, { headers });
  }

  /**
   * Get single post
   * @param id
   */
  getSinglePost(id: number) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<PostInterfaceItem>(this.api + this.posts + id, { headers });
  }

  /**
   * Get comments for single post
   * @param id
   */
  getCommentsFofSinglePost(id: number) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<CommentInterface>(this.api + this.posts + id + '/replies/', { headers });
  }


}
