import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http:HttpClient) { } // injection de dependances
  getEmployers(): Observable<Employer[]>{
    return this.http.get<Employer[]>("https://jsonplaceholder.typicode.com/users");
  }


  getEmployerById(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users"+id);
  }

}
