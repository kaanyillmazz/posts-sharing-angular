import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post} from "./post";
import {Comment} from "./comment";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL: string = "https://jsonplaceholder.typicode.com/posts/";
  private commentURL: string = "https://jsonplaceholder.typicode.com/comments";
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURL).pipe(
      catchError(this.handleError<Post[]>('getPosts', []))
    );
  }

  getComments(id: number): Observable<Comment[]> {
    const url = `${this.commentURL}?postId=${id}`;
    return this.http.get<Comment[]>(url).pipe(
      catchError(this.handleError<Comment[]>('getComments', []))
    )
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Post>(url).pipe(
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
