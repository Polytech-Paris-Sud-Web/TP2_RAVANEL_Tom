import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArticleCreationComponent } from './web-article/components/article-creation/article-creation.component';
import { ArticlesComponent } from './web-article/components/articles/articles.component';
import { ArticleComponent } from './web-article/components/article/article.component';
import { AuthorComponent } from './web-author/components/author/author.component';
import { ArticlesHomeWidgetComponent } from './web-article/components/articles-home-widget/articles-home-widget.component';
import { AuthorService } from './web-author/services/author.service';
import { ArticleService } from './web-article/services/article.service';
import { AuthorFormComponent } from './web-author/components/author-form/author-form.component';
import { ArticleSource } from './web-article/services/article.source';
import { ArticleInMemorySource } from './web-article/services/article.in-memory-source';
import { AuthorSource } from './web-author/services/author.source';
import { AuthorInMemorySource } from './web-author/services/author.in-memory-source';

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
  providers: [ {provide: ArticleSource, useFactory: (httpClient:HttpClient) => {
    if(environment.production){
      return new ArticleService(httpClient);
    } else{
      return new ArticleInMemorySource();
    }
  }, deps:[HttpClient]
}, {provide: AuthorSource, useFactory: (httpClient:HttpClient) => {
  if(environment.production){
    return new AuthorService(httpClient);
  } else{
    return new AuthorInMemorySource();
  }
}, deps:[HttpClient]
}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
