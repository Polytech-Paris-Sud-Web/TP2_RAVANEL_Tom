import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../model/Article';
import { BaseArticle } from '../model/BaseArticle';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;
  @Output()
  articleAdded : EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router:Router) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ]
    });
  }
  createArticle(){
    const { title, content, author } = this.articleForm.value;
    const newArticle:BaseArticle =  {
      title,
      content,
      author
    }
    this.articleService.createArticle(newArticle).subscribe((article) => {
      this.articleAdded.emit(article);
      this.router.navigateByUrl("/articles")
    });

  }
  ngOnInit(): void {
  }

}
