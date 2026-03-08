import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep8 } from './ep-8';

describe('Ep8', () => {
  let component: Ep8;
  let fixture: ComponentFixture<Ep8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
