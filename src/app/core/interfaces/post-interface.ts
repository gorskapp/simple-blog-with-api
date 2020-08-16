import { ContentInterface } from './content-interface';

export interface AuthorInterface {
  id: number;
  name: string;
}

export interface DiscussionInterface {
  comment_count: number;
}

export interface PostThumbnailInterface {
  id: number;
  URL: string;
  height: number;
  width: number;
}

export interface PostInterfaceItem {
  ID: number;
  author: AuthorInterface;
  content: string;
  date: Date;
  discussion: DiscussionInterface;
  excerpt: string;
  post_thumbnail: PostThumbnailInterface;
  title: string;
}

export interface PostInterface extends ContentInterface{
  content: PostInterfaceItem[];
}

