import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListingComponent } from './phone-listing.component';

describe('PhoneListingComponent', () => {
  let component: PhoneListingComponent;
  let fixture: ComponentFixture<PhoneListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
