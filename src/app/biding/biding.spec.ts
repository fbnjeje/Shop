import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biding } from './biding';

describe('Biding', () => {
  let component: Biding;
  let fixture: ComponentFixture<Biding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
