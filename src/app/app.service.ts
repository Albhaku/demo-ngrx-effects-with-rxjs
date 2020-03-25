import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post, Comment } from './app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<Post[]>(`${environment.api}/posts`);
  }

  getComments(postId: number) {
    return this.http.get<Comment[]>(`${environment.api}/comments?postId=${postId}`);
  }

  createComment(comment: Comment) {
    return this.http.post<{ comment: Comment }>(`${environment.api}/comments`, { comment });
  }
}
