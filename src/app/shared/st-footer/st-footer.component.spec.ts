import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFooterComponent } from './st-footer.component';

describe('StFooterComponent', () => {
  let component: StFooterComponent;
  let fixture: ComponentFixture<StFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
