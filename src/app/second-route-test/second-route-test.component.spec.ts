import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRouteTestComponent } from './second-route-test.component';

describe('SecondRouteTestComponent', () => {
  let component: SecondRouteTestComponent;
  let fixture: ComponentFixture<SecondRouteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondRouteTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondRouteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
