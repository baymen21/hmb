import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpperCaseFirstLetterPipe } from './pipes/upper-case-first-letter.pipe';
import { ConcactStringIngenieurPipe } from './piepes/concact-string-ingenieur.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UpperCaseFirstLetterPipe,
    ConcactStringIngenieurPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
