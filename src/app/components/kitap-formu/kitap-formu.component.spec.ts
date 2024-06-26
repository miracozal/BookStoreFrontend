import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapFormuComponent } from './kitap-formu.component';

describe('KitapFormuComponent', () => {
  let component: KitapFormuComponent;
  let fixture: ComponentFixture<KitapFormuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitapFormuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitapFormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
