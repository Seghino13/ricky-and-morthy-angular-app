import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterByIdComponent } from './character-by-id.component';

describe('CharacterByIdComponent', () => {
  let component: CharacterByIdComponent;
  let fixture: ComponentFixture<CharacterByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
