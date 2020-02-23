import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopicCreateComponent } from './sub-topic-create.component';

describe('SubTopicCreateComponent', () => {
  let component: SubTopicCreateComponent;
  let fixture: ComponentFixture<SubTopicCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTopicCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTopicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
