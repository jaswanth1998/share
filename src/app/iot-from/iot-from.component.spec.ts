import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotFromComponent } from './iot-from.component';

describe('IotFromComponent', () => {
  let component: IotFromComponent;
  let fixture: ComponentFixture<IotFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
