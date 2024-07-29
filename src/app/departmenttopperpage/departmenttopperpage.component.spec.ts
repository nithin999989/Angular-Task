import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenttopperpageComponent } from './departmenttopperpage.component';

describe('DepartmenttopperpageComponent', () => {
  let component: DepartmenttopperpageComponent;
  let fixture: ComponentFixture<DepartmenttopperpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmenttopperpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenttopperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
