import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularbarsComponent } from './tabularbars.component';

describe('TabularbarsComponent', () => {
  let component: TabularbarsComponent;
  let fixture: ComponentFixture<TabularbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabularbarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabularbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
