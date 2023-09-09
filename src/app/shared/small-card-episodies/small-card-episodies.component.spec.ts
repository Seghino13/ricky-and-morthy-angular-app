import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardEpisodiesComponent } from './small-card-episodies.component';

describe('SmallCardEpisodiesComponent', () => {
  let component: SmallCardEpisodiesComponent;
  let fixture: ComponentFixture<SmallCardEpisodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardEpisodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardEpisodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
