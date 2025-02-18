import { Injectable } from '@angular/core';
import { Provider } from '../Models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http:HttpClient) { } // injection de dependances

  getProviders(): Observable<Provider[]>{ //méthode get des all providers pour futur affichage
      return this.http.get<Provider[]>("http://127.0.0.1:8085/providers/");
    }

  addProvider(provider:Provider): Observable<Provider[]>{ // méthode d'ajout d'un provider
      return this.http.post<Provider[]>("http://127.0.0.1:8085/providers/",provider);
    }

  deleteProvider(id:any){
      return this.http.delete("http://127.0.0.1:8085/providers/"+id);
     }

  getProviderById(id:any){
      return this.http.get("http://127.0.0.1:8085/providers/"+id);
     }

  updateProvider(provider:Provider): Observable<Provider>{
      return this.http.put<Provider>("http://127.0.0.1:8085/providers/",provider);
    }

}
