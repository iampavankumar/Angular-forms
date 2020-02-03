import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngregisterComponent } from './angregister.component';

describe('AngregisterComponent', () => {
  let component: AngregisterComponent;
  let fixture: ComponentFixture<AngregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
