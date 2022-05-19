import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesHomeWidgetComponent } from './articles-home-widget/articles-home-widget.component';
import { AuthorComponent } from './author/author.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorService } from './author.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },  
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'author/:name', component: AuthorComponent },
  { path: '', component: ArticlesHomeWidgetComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticlesHomeWidgetComponent,
    AuthorComponent,
    AuthorFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }) 
  ],
  providers: [ArticleService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
