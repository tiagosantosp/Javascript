import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMercadoComponent } from './lista-mercado.component';

describe('ListaMercadoComponent', () => {
  let component: ListaMercadoComponent;
  let fixture: ComponentFixture<ListaMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
