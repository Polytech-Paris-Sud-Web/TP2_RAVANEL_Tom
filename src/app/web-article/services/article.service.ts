import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Article } from '../model/Article';
import { BaseArticle } from '../model/BaseArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  private readonly baseUrl:string = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_RAVANEL_Tom/articles/";

  public getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }

  public getArticle(id:String): Observable<Article> {
    return this.http.get<Article>(this.baseUrl+id);
  }

  public delete(id:String): Observable<Article[]>{
    return this.http.delete<Article[]>(this.baseUrl+id);
  }

  public createArticle(article : BaseArticle): Observable<Article> {
    return this.http.post<Article>(this.baseUrl, article);
  }
}
