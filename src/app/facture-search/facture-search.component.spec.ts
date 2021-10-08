import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureSearchComponent } from './facture-search.component';

describe('FactureSearchComponent', () => {
  let component: FactureSearchComponent;
  let fixture: ComponentFixture<FactureSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
