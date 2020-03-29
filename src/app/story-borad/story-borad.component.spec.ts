import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoradComponent } from './story-borad.component';

describe('StoryBoradComponent', () => {
  let component: StoryBoradComponent;
  let fixture: ComponentFixture<StoryBoradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBoradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
