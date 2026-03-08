import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep10 } from './ep-10';

describe('Ep10', () => {
  let component: Ep10;
  let fixture: ComponentFixture<Ep10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
