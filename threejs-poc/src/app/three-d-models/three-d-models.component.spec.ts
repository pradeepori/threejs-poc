import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDModelsComponent } from './three-d-models.component';

describe('ThreeDModelsComponent', () => {
  let component: ThreeDModelsComponent;
  let fixture: ComponentFixture<ThreeDModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
