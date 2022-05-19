import { Component } from '@angular/core';
import { ArticleSource } from './web-article/services/article.source';
import { AuthorSource } from './web-author/services/author.source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-app'; 

  constructor(private articleSource:ArticleSource, private authorSource:AuthorSource){
    articleSource.getArticles().subscribe(articles => {
      articles.forEach(a => {articleSource.getArticle(a.id)});
    })
    authorSource.getAuthors();
  }
}
