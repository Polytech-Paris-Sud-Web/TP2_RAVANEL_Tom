import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/web-article/model/Article';
import { ArticleService } from 'src/app/web-article/services/article.service';
import { Author } from '../../model/Author';
import { BaseAuthor } from '../../model/BaseAuthor';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  name!:string;
  author!: Author;
  articles!:Article[]

  constructor(private articleService:ArticleService, private authorService:AuthorService, private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params && params['name']){
        this.name = params['name'];
        this.getAuthorArticles();
        this.authorService.getAuthors().subscribe(authors => {
          const res = authors.filter(a => a.name == params['name']);
          if(res.length > 0){
            this.author = res[0];
          }
        });
      }
    });
  }

  onAuthorUpdated(author:BaseAuthor){
    if(this.author == undefined){
      author.name = this.name;
      this.authorService.createAuthor(author).subscribe(newAuth => {this.author = newAuth});
    }
    else{
      this.author.age = author.age;
      this.author.description = author.description;
      this.authorService.modifyAuthor(this.author).subscribe(newAuth => {this.author = newAuth});
    }
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
