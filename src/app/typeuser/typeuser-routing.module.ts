import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypeUserComponent } from './add-type-user/add-type-user.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { ListTypeUserComponent } from './list-type-user/list-type-user.component';

const routes: Routes = [
  {path: "addTypeUser",
    component: AddTypeUserComponent
   },
   {
    path: "listTypeUser",
    component: ListTypeUserComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeuserRoutingModule {}
