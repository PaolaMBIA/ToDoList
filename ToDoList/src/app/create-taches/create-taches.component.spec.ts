import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTachesComponent } from './create-taches.component';

describe('CreateTachesComponent', () => {
  let component: CreateTachesComponent;
  let fixture: ComponentFixture<CreateTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
