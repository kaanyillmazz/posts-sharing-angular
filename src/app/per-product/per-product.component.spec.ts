import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerProductComponent } from './per-product.component';

describe('PerProductComponent', () => {
  let component: PerProductComponent;
  let fixture: ComponentFixture<PerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
