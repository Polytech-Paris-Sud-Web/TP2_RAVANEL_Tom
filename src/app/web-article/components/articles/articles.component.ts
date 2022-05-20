import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from '../../model/Article';
import { ArticleSource } from '../../services/article.source';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles!: Article[];
  searchForm : FormGroup;

  constructor(private fb: FormBuilder, private articleSource: ArticleSource) {
    this.searchForm = this.fb.group({
      searchedText: ['']      
    });
  }

  ngOnInit() {
    this.articleSource.getArticles().subscribe(value => {
     this.articles = value;
   });
 }

  delete(article : Article){
    this.articleSource.getArticles().subscribe(value => {
      this.articles = value;
    });
  }

  onArticleAdded(article: Article){
    this.articleSource.getArticles().subscribe(value => {
      this.articles = value;
    });
  }  

  searchArticle(){
    const searchedText:string = this.searchForm.get("searchedText")?.value;  
    if(searchedText == ""){
      this.articleSource.getArticles().subscribe(value => {
        this.articles = value;
      });
    }
    else{
      this.articleSource.getArticles().subscribe(articles => {
        const res = articles.filter(article => article.title.toLowerCase().includes(searchedText.toLowerCase()) || 
        article.content.toLowerCase().includes(searchedText.toLowerCase()))  
        this.articles = res;
      });
    }    
  }
}
