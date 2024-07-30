import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'https://localhost:7185/api/Comments';

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/${postId}`);
  }

  postComment(postId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/${postId}`, comment);
  }
}



