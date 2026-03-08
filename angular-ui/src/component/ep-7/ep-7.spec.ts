import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep7 } from './ep-7';

describe('Ep7', () => {
  let component: Ep7;
  let fixture: ComponentFixture<Ep7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
