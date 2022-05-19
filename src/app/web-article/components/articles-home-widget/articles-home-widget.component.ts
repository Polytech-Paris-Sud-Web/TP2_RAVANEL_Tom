import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/Article';
import { ArticleSource } from '../../services/article.source';

@Component({
  selector: 'app-articles-home-widget',
  templateUrl: './articles-home-widget.component.html',
  styleUrls: ['./articles-home-widget.component.css']
})
export class ArticlesHomeWidgetComponent implements OnInit {

  articles!: Article[];
  constructor(private articleSource: ArticleSource) {
  }

  ngOnInit() {
    this.articleSource.getArticles().subscribe(value => {
     this.articles = value.slice(-10).reverse();
   });
 }

  delete(article : Article){
    this.articleSource.getArticles().subscribe(value => {
      this.articles = value.slice(-10).reverse();
    });
  }

  onArticleAdded(article: Article){
    this.articleSource.getArticles().subscribe(value => {
      this.articles = value.slice(-10).reverse();
    });
  }  

}