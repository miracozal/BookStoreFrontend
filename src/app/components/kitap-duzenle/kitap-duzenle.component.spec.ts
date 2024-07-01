import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapDuzenleComponent } from './kitap-duzenle.component';

describe('KitapDuzenleComponent', () => {
  let component: KitapDuzenleComponent;
  let fixture: ComponentFixture<KitapDuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitapDuzenleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitapDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
