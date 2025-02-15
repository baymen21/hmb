import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpperCaseFirstLetterPipe } from './pipes/upper-case-first-letter.pipe';
import { ConcactStringIngenieurPipe } from './piepes/concact-string-ingenieur.pipe';
import { ListEmployersComponent } from './list-employers/list-employers.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UpperCaseFirstLetterPipe,
    ConcactStringIngenieurPipe,
    ListEmployersComponent,
    ListPostsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
