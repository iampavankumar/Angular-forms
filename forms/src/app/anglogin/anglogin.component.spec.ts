import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngloginComponent } from './anglogin.component';

describe('AngloginComponent', () => {
  let component: AngloginComponent;
  let fixture: ComponentFixture<AngloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
