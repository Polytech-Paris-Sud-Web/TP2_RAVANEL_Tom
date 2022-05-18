import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Author } from './model/Author';
import { BaseAuthor } from './model/BaseAuthor';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  constructor(private http : HttpClient) { }

  public getAuthors() : Observable<Author[]> {
    return this.http.get<Author[]>("http://localhost:3000/authors");
  }

  public modifyAuthor(author : Author): Observable<Author>{
    return this.http.put<Author>("http://localhost:3000/authors", author);
  }

  public createAuthor(author : BaseAuthor): Observable<Author> {
    return this.http.post<Author>("http://localhost:3000/authors", author);
  }
}
