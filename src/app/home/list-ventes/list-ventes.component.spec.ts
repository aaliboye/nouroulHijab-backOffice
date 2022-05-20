import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVentesComponent } from './list-ventes.component';

describe('ListVentesComponent', () => {
  let component: ListVentesComponent;
  let fixture: ComponentFixture<ListVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
