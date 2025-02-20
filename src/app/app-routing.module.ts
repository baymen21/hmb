import { ListPostsComponent } from './list-posts/list-posts.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployersComponent } from './list-employers/list-employers.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { DetailsProviderComponent } from './details-provider/details-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ProviderArticlesComponent } from './provider-articles/provider-articles.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"employers",
    component:ListEmployersComponent
  },

  {
    path:"posts",
    component:ListPostsComponent
  },

  {
    path:"todos",
    component:ListTodoComponent
  },

  {
    path:"providers",
    component:ListProvidersComponent
  },

  {
    path:"addproviders",
    component:AddProviderComponent
  },

  {
    path:"updateProvider/:id",
    component:UpdateProviderComponent
  },

  {
    path:"detailsProvider/:id",
    component:DetailsProviderComponent
  },

  {
    path:"listArticles",
    component:ListArticlesComponent
  },

  {
    path:"addArticle",
    component:AddArticleComponent
  },

  {
    path: "providerArticles",
    component: ProviderArticlesComponent
  },

  {
    path:'', redirectTo:'/home', pathMatch:'full' //sert à afficher la page Home dès le lancement de l'application
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
