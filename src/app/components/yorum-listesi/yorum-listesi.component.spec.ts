import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorumListesiComponent } from './yorum-listesi.component';

describe('YorumListesiComponent', () => {
  let component: YorumListesiComponent;
  let fixture: ComponentFixture<YorumListesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YorumListesiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YorumListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
