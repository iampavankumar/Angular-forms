import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactRegisterComponent } from './react-register.component';

describe('ReactRegisterComponent', () => {
  let component: ReactRegisterComponent;
  let fixture: ComponentFixture<ReactRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
