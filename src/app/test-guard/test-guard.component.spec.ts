import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGuardComponent } from './test-guard.component';

describe('TestGuardComponent', () => {
  let component: TestGuardComponent;
  let fixture: ComponentFixture<TestGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
