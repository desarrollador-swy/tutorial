import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeroesComponent } from './detalle-heroes.component';

describe('DetalleHeroesComponent', () => {
  let component: DetalleHeroesComponent;
  let fixture: ComponentFixture<DetalleHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
