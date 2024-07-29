import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackregisterComponent } from './trackregister.component';

describe('TrackregisterComponent', () => {
  let component: TrackregisterComponent;
  let fixture: ComponentFixture<TrackregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
