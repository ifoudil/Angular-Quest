import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigXPageComponent } from './config-xpage.component';

describe('ConfigXPageComponent', () => {
  let component: ConfigXPageComponent;
  let fixture: ComponentFixture<ConfigXPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigXPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigXPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
