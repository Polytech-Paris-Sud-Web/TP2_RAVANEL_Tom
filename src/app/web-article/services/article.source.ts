import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from '../model/Article';
import { BaseArticle } from '../model/BaseArticle';

@Injectable()
export abstract class ArticleSource {
  abstract getArticles() : Observable<Article[]>;

  abstract getArticle(id:String): Observable<Article>;

  abstract delete(id:String): Observable<Article[]>;

  abstract createArticle(article : BaseArticle): Observable<Article>;
}
