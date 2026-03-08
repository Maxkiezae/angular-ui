import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep5 } from './ep-5';

describe('Ep5', () => {
  let component: Ep5;
  let fixture: ComponentFixture<Ep5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
