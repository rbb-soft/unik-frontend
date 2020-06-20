import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMenuCartComponent } from './index-menu-cart.component';

describe('IndexMenuCartComponent', () => {
  let component: IndexMenuCartComponent;
  let fixture: ComponentFixture<IndexMenuCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMenuCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMenuCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
