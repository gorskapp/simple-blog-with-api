import { AuthorInterface } from './post-interface';
import { ContentCommentsInterface } from './content-comments-interface';

export interface CommentItemInterface {
  author: AuthorInterface;
  content: string;
  like_count: number;
  date: Date;
}

export interface CommentInterface extends ContentCommentsInterface{
  content: CommentItemInterface[];
}
