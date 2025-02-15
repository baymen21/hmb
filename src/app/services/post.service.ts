import { Injectable } from '@angular/core';
import { Post } from '../Models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
constructor(private http:HttpClient) { } // injection de dependances
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

}
