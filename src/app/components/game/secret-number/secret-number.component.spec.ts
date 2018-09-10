import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretNumberComponent } from './secret-number.component';

describe('SecretNumberStateComponent', () => {
  let component: SecretNumberComponent;
  let fixture: ComponentFixture<SecretNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
