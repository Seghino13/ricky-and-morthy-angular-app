import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardLocationComponent } from './small-card-location.component';

describe('SmallCardLocationComponent', () => {
  let component: SmallCardLocationComponent;
  let fixture: ComponentFixture<SmallCardLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
