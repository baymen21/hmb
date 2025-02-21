import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TypeUser } from '../Models/TypeUser';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  private baseUrl = environment.baseUrl + "typeUsers";

  constructor(private http: HttpClient) {}

  getAll(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.baseUrl);
  }

  getById(id: number): Observable<TypeUser> {
    return this.http.get<TypeUser>(`${this.baseUrl}${id}`);
  }

  create(typeUser: TypeUser): Observable<TypeUser> {
    return this.http.post<TypeUser>(this.baseUrl, typeUser);
  }

  update(id: number, typeUser: TypeUser): Observable<TypeUser> {
    return this.http.put<TypeUser>(`${this.baseUrl}/${id}`, typeUser);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
