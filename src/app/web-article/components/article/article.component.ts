import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../model/Article';
import { ArticleSource } from '../../services/article.source';

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

  constructor(private articleSource : ArticleSource, private activatedRoute: ActivatedRoute,private router:Router){ }

  delete(){
    this.articleSource.delete(this.article.id).subscribe(()=>{
      this.deletedArticle.emit(this.article)
      if(this.router.url == "/articles/"+this.article.id){
        this.router.navigateByUrl("/articles")
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params && params['id']){
        this.articleSource.getArticle(params['id']).subscribe(fetchedArticle => this.article = fetchedArticle);
      }
    });
  }
}