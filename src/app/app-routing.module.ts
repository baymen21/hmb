import { ListPostsComponent } from './list-posts/list-posts.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployersComponent } from './list-employers/list-employers.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
