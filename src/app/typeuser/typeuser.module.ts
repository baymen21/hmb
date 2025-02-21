import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeuserRoutingModule } from './typeuser-routing.module';
import { ListTypeUserComponent } from './list-type-user/list-type-user.component';
import { AddTypeUserComponent } from './add-type-user/add-type-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListTypeUserComponent,
    AddTypeUserComponent
  ],
  imports: [
    CommonModule,
    TypeuserRoutingModule,
    ReactiveFormsModule
  ]
})
export class TypeuserModule { }
