import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl + "users";
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  save(user: any, file?: File): Observable<User> {
    const formData = new FormData();
    formData.append('user', JSON.stringify({ ...user, type: { id: user.type.id } }));
    if (file) formData.append('file', file);
    return this.http.post<User>(this.baseUrl, formData);
  }

  update(id: number, user: any, file?: File): Observable<User> {
    const formData = new FormData();
    formData.append('user', JSON.stringify({ ...user, type: { id: user.type.id } }));
    if (file) formData.append('file', file);
    return this.http.put<User>(`${this.baseUrl}/${id}`, formData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
