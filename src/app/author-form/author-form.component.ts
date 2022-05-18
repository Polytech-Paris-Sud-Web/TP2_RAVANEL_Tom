import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from '../model/Author';
import { BaseAuthor } from '../model/BaseAuthor';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  authorForm : FormGroup;

  @Input()
  name!:String;

  @Output()
  authorUpdated : EventEmitter<BaseAuthor> = new EventEmitter<BaseAuthor>();

  constructor(private fb: FormBuilder) {
    this.authorForm = this.fb.group({
      age: ['', Validators.required ],
      description : ['', Validators.required ]
    });
  }
  modifyAuthor(){
    const aggr = {...this.name, ...this.authorForm.value};
    const {name, age, description} = aggr;
    const newAuthor:BaseAuthor =  {name, age, description}
    this.authorUpdated.emit(newAuthor);
  }
  ngOnInit(): void {
  }

}
