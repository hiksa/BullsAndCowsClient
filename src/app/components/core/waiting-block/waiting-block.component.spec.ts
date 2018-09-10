import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingBlockComponent } from './waiting-block.component';

describe('WaitingBlockComponent', () => {
  let component: WaitingBlockComponent;
  let fixture: ComponentFixture<WaitingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
