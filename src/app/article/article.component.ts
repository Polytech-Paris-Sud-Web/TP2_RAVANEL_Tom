import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../model/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article!: Article;
  
  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private articleService : ArticleService, private activatedRoute: ActivatedRoute,private router:Router){ }

  delete(){
    this.articleService.delete(this.article.id).subscribe(value=>{
      this.deletedArticle.emit(this.article)
      if(this.router.url == "/articles/"+this.article.id){
        this.router.navigateByUrl("/articles")
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params && params['id']){
        this.articleService.getArticle(params['id']).subscribe(fetchedArticle => this.article = fetchedArticle);
      }
    });
  }
}