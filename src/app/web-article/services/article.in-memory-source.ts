import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from '../model/Article';
import { BaseArticle } from '../model/BaseArticle';
import { ArticleSource } from './article.source';

export class ArticleInMemorySource implements ArticleSource{

  constructor(private articles : Article[] = []) { }

  public getArticles() : Observable<Article[]> {
    return of(this.articles)
  }

  public getArticle(id:String): Observable<Article> {
    const res = this.articles.find(a => a.id === id);
    if(res){
      return of(res);
    }
    else{
      throw new Error("Article " + id + "not found");
    }
  }

  public delete(id:String): Observable<Article[]>{
    this.articles = this.articles.filter(a => a.id !== id);
    return of(this.articles);
  }

  public createArticle(article : BaseArticle): Observable<Article> {
    const newArticle:Article = {
      id: this.articles.length.toString(),
      title: article.title,
      content: article.content,
      author: article.author
    }
    this.articles.push(newArticle)
    return of(newArticle)
  }
}
