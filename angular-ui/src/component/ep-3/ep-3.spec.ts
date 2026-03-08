import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep3 } from './ep-3';

describe('Ep3', () => {
  let component: Ep3;
  let fixture: ComponentFixture<Ep3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
