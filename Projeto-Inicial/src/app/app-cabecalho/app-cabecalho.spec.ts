import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCabecalho } from './app-cabecalho';

describe('AppCabecalho', () => {
  let component: AppCabecalho;
  let fixture: ComponentFixture<AppCabecalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCabecalho],
    }).compileComponents();

    fixture = TestBed.createComponent(AppCabecalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
