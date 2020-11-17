import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTascheComponent } from './edit-tasche.component';

describe('EditTascheComponent', () => {
  let component: EditTascheComponent;
  let fixture: ComponentFixture<EditTascheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTascheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTascheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
