import { ListPostsComponent } from './list-posts/list-posts.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployersComponent } from './list-employers/list-employers.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

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
    path:'', redirectTo:'/home', pathMatch:'full' //sert à afficher la page Home dès le lancement de l'application
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
