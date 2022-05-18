import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../model/Article';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  name!: string;
  articles!:Article[]

  constructor(private articleService:ArticleService, private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params && params['name']){
            this.name = params['name'];
            this.getAuthorArticles();
          }
    });
  }

  getAuthorArticles(){
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles.filter(a => a.author == this.name)
    });
  }

  delete(article : Article){
    this.getAuthorArticles();
  }
}
