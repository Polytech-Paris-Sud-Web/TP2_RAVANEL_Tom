import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomeWidgetComponent } from './articles-home-widget.component';

describe('ArticlesHomeWidgetComponent', () => {
  let component: ArticlesHomeWidgetComponent;
  let fixture: ComponentFixture<ArticlesHomeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesHomeWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHomeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
