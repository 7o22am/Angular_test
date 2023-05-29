import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithOutDiscountComponent } from './products-with-out-discount.component';

describe('ProductsWithOutDiscountComponent', () => {
  let component: ProductsWithOutDiscountComponent;
  let fixture: ComponentFixture<ProductsWithOutDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsWithOutDiscountComponent]
    });
    fixture = TestBed.createComponent(ProductsWithOutDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
