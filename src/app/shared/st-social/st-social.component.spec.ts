import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StSocialComponent } from './st-social.component';

describe('StSocialComponent', () => {
  let component: StSocialComponent;
  let fixture: ComponentFixture<StSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
