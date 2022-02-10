import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterScreenComponent } from './counter-screen.component';

describe('CounterScreenComponent', () => {
  let component: CounterScreenComponent;
  let fixture: ComponentFixture<CounterScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
