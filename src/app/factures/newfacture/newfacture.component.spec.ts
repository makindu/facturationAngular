import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfactureComponent } from './newfacture.component';

describe('NewfactureComponent', () => {
  let component: NewfactureComponent;
  let fixture: ComponentFixture<NewfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
