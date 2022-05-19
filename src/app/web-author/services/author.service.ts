import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Author } from '../model/Author';
import { BaseAuthor } from '../model/BaseAuthor';
import { AuthorSource } from './author.source';

@Injectable({
  providedIn: 'root'
})

export class AuthorService implements AuthorSource {

  constructor(private http : HttpClient) { }

  private readonly baseUrl:string = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_RAVANEL_Tom/authors/";

  public getAuthors() : Observable<Author[]> {
    return this.http.get<Author[]>(this.baseUrl);
  }

  public modifyAuthor(author : Author): Observable<Author>{
    return this.http.put<Author>(this.baseUrl + author.id, author);
  }

  public createAuthor(author : BaseAuthor): Observable<Author> {
    return this.http.post<Author>(this.baseUrl, author);
  }
}
