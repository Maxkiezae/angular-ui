import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep9 } from './ep-9';

describe('Ep9', () => {
  let component: Ep9;
  let fixture: ComponentFixture<Ep9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
