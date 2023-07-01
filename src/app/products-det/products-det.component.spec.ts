import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetComponent } from './products-det.component';

describe('ProductsDetComponent', () => {
  let component: ProductsDetComponent;
  let fixture: ComponentFixture<ProductsDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetComponent]
    });
    fixture = TestBed.createComponent(ProductsDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
