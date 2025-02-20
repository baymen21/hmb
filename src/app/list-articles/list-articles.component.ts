import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  standalone: false,
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent implements OnInit{
  article:Article[]=[];
      constructor(private service:ArticleService, private router:Router){
      }
      ngOnInit(): void {
        this.loadArticles();
       }

       loadArticles(){
        this.service.getArticles().subscribe(
          (data) =>
             {
               //console.log(data)
               this.article = data;
               //console.log(this.employers)
             }
         );
      }
}
