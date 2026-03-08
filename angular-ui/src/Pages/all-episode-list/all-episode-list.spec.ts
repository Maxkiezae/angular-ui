import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEpisodeList } from './all-episode-list';

describe('AllEpisodeList', () => {
  let component: AllEpisodeList;
  let fixture: ComponentFixture<AllEpisodeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllEpisodeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEpisodeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
