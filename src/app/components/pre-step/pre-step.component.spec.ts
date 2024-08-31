import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreStepComponent } from './pre-step.component';

describe('PreStepComponent', () => {
  let component: PreStepComponent;
  let fixture: ComponentFixture<PreStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
