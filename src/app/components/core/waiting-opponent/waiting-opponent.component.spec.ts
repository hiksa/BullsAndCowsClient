import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingOpponentComponent } from './waiting-opponent.component';

describe('WaitingScreenComponent', () => {
  let component: WaitingOpponentComponent;
  let fixture: ComponentFixture<WaitingOpponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingOpponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
