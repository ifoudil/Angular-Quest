import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigYPageComponent } from './config-ypage.component';

describe('ConfigYPageComponent', () => {
  let component: ConfigYPageComponent;
  let fixture: ComponentFixture<ConfigYPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigYPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigYPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
