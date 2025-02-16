import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './../Models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
constructor(private http:HttpClient) { } // injection de dependances
  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
