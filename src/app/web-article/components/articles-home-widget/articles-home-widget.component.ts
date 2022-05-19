import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles-home-widget',
  templateUrl: './articles-home-widget.component.html',
  styleUrls: ['./articles-home-widget.component.css']
})
export class ArticlesHomeWidgetComponent implements OnInit {

  articles!: Article[];
  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(value => {
     this.articles = value.slice(-10).reverse();
   });
 }

  delete(article : Article){
    this.articleService.getArticles().subscribe(value => {
      this.articles = value.slice(-10).reverse();
    });
  }

  onArticleAdded(article: Article){
    this.articleService.getArticles().subscribe(value => {
      this.articles = value.slice(-10).reverse();
    });
  }  

}