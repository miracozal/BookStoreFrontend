import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapDetaylariComponent } from './kitap-detaylari.component';

describe('KitapDetaylariComponent', () => {
  let component: KitapDetaylariComponent;
  let fixture: ComponentFixture<KitapDetaylariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitapDetaylariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitapDetaylariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
