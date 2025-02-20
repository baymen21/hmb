import { Injectable } from '@angular/core';
import { Article } from '../Models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http:HttpClient) { }

  getArticles(): Observable<Article[]>{ //méthode get des all Articles pour futur affichage
        return this.http.get<Article[]>(environment.baseUrl+"articles/");
      }

  addArticle(article:Article, idProvider:number): Observable<Article>{ // méthode d'ajout d'un Article
        return this.http.post<Article>(environment.baseUrl+"articles/" +idProvider, article);
      }
}
