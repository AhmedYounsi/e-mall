import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDisplayerComponent } from './store-displayer.component';

describe('StoreDisplayerComponent', () => {
  let component: StoreDisplayerComponent;
  let fixture: ComponentFixture<StoreDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreDisplayerComponent]
    });
    fixture = TestBed.createComponent(StoreDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
