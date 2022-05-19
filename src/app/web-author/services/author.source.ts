import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Author } from '../model/Author';
import { BaseAuthor } from '../model/BaseAuthor';

@Injectable()
export abstract class AuthorSource {
  abstract getAuthors() : Observable<Author[]>;

  abstract modifyAuthor(author : Author): Observable<Author>;

  abstract createAuthor(author : BaseAuthor): Observable<Author>;
}
