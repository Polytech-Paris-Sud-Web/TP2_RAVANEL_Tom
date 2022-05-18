import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { BaseArticle } from './model/BaseArticle';
import { Article } from './model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  public getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id:String): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" +id);
  }

  public delete(id:String): Observable<Article[]>{
    return this.http.delete<Article[]>("http://localhost:3000/articles/"+id);
  }

  public createArticle(article : BaseArticle): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", article);
  }
}
