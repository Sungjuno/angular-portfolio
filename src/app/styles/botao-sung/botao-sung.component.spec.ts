import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSungComponent } from './botao-sung.component';

describe('BotaoSungComponent', () => {
  let component: BotaoSungComponent;
  let fixture: ComponentFixture<BotaoSungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoSungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoSungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
