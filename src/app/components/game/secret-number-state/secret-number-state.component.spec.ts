import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretNumberStateComponent } from './secret-number-state.component';

describe('SecretNumberStateComponent', () => {
  let component: SecretNumberStateComponent;
  let fixture: ComponentFixture<SecretNumberStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretNumberStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretNumberStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
