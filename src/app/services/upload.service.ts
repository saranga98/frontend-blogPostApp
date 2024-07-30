import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private apiUrl = `https://backendblogpostsite20240730155359.azurewebsites.net/api/posts`;

  constructor(private http: HttpClient) { }
  uploadPost(postData: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', postData.title);
    formData.append('author', postData.author);
    formData.append('description', postData.description);
    formData.append('file', file);

    return this.http.post<any>(this.apiUrl, formData);
  }
}
