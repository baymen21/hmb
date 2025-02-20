import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../Models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderArticlesService {

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir les articles en fonction de l'ID du provider
  getArticlesByProvider(providerId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.baseUrl}articles?providerId=${providerId}`);
  }
}
