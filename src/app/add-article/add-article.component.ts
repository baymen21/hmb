import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Article, Provider } from '../Models';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  standalone: false,
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {

  providers: Provider[] = [];
  constructor(private serviceArticle: ArticleService, private serviceProvider: ProviderService, private router:Router) { }
  ngOnInit(): void {
    this.loadProviders();
  }
  loadProviders() {
    this.serviceProvider.getProviders().subscribe(
      (data) => {
        //console.log(data)
        this.providers = data;
        //console.log(this.employers)
      }
    );
  }
  ajouterArticle(articleForm: any) {

    let article: Article = {
      "label": articleForm.label,
      "picture": articleForm.picture,
      "price": articleForm.price,
      id:0
    }
   this.serviceArticle.addArticle(article, articleForm.idProvider).subscribe(
        data => {//console.log("Saved")
          this.router.navigate(["/listArticles"]);
        }
    )

  }

}
