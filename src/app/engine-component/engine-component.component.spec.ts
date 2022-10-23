import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineComponentComponent } from './engine-component.component';

describe('EngineComponentComponent', () => {
  let component: EngineComponentComponent;
  let fixture: ComponentFixture<EngineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
