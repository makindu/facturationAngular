import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscomptesComponent } from './souscomptes.component';

describe('SouscomptesComponent', () => {
  let component: SouscomptesComponent;
  let fixture: ComponentFixture<SouscomptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouscomptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
