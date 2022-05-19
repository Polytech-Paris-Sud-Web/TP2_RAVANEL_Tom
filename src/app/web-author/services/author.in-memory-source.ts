import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Author } from '../model/Author';
import { BaseAuthor } from '../model/BaseAuthor';
import { AuthorSource } from './author.source';

export class AuthorInMemorySource implements AuthorSource {

  constructor(private authors:Author[] = []) { }

  public getAuthors() : Observable<Author[]> {
    return of(this.authors);
  }

  public modifyAuthor(author : Author): Observable<Author>{
    const a = this.authors.find(a => a.id === author.id);
    if(a){
      a.age = author.age;
      a.description = author.description;
      return of(a);
    }
    throw new Error("Author " + author.id + " not found") ;
  }

  public createAuthor(author : BaseAuthor): Observable<Author> {
    const newAuthor:Author = {
      id: this.authors.length.toString(),
      name: author.name,
      age: author.age,
      description: author.description
    }
    this.authors.push(newAuthor)
    return of(newAuthor)
  }
}
