import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = `https://localhost:7185/api/Posts`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPost(postData: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', postData.title);
    formData.append('author', postData.author);
    formData.append('description', postData.description);
    formData.append('file', file);

    return this.http.post<any>(this.apiUrl, formData);
  }

  updatePost(id: number, postData: any, file?: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', postData.title);
    formData.append('author', postData.author);
    formData.append('description', postData.description);
    if (file) {
      formData.append('file', file);
    }

    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
}