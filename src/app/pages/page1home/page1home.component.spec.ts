import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1homeComponent } from './page1home.component';

describe('Page1homeComponent', () => {
  let component: Page1homeComponent;
  let fixture: ComponentFixture<Page1homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1homeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
