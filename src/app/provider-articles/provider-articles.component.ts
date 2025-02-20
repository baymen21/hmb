import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ProviderArticlesService } from '../services/provider-articles.service';
import { Provider } from '../Models';
import { Article } from '../Models';
//import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-provider-articles',
  standalone: false,
  templateUrl: './provider-articles.component.html',
  styleUrls: ['./provider-articles.component.css']
})
export class ProviderArticlesComponent implements OnInit {
  providers: Provider[] = [];
  selectedProviderId!: number;
  selectedProvider!: Provider;
  articles: Article[] = [];

  constructor(
    private providerService: ProviderService,
    private providerArticlesService: ProviderArticlesService
  ) {}

  ngOnInit(): void {
    this.loadProviders();
  }

  // Charger la liste des providers
  loadProviders(): void {
    this.providerService.getProviders().subscribe(providers => {
      this.providers = providers;
      console.log(providers)
    });
  }

  // Charger les articles du provider sélectionné
  onProviderSelected(): void {
    if (this.selectedProviderId !== null) {
      this.providerService.getProviderById(this.selectedProviderId).subscribe(provider => {
        this.selectedProvider = provider as Provider;
        this.providerArticlesService.getArticlesByProvider(this.selectedProviderId!).subscribe(articles => {
          this.articles = articles;
        });
      });
    }
  }
}
