import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../model/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles!: Article[];
  searchForm : FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.searchForm = this.fb.group({
      searchedText: ['']      
    });
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(value => {
     this.articles = value;
   });
 }

  delete(article : Article){
    this.articleService.getArticles().subscribe(value => {
      this.articles = value;
    });
  }

  onArticleAdded(article: Article){
    this.articleService.getArticles().subscribe(value => {
      this.articles = value;
    });
  }  

  searchArticle(){
    const searchedText:string = this.searchForm.get("searchedText")?.value;  
    if(searchedText == ""){
      this.articleService.getArticles().subscribe(value => {
        this.articles = value;
      });
    }
    else{
      this.articleService.getArticles().subscribe(articles => {
        const res = articles.filter(article => article.title.toLowerCase().includes(searchedText.toLowerCase()) || 
        article.content.toLowerCase().includes(searchedText.toLowerCase()))  
        this.articles = res;
      });
    }
    
  }
}
