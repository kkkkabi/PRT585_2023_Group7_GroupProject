import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S360233KabiComponent } from './s360233-kabi.component';

describe('S360233KabiComponent', () => {
  let component: S360233KabiComponent;
  let fixture: ComponentFixture<S360233KabiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S360233KabiComponent]
    });
    fixture = TestBed.createComponent(S360233KabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
