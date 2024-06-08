import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDModalComponent } from './crudmodal.component';

describe('CRUDModalComponent', () => {
  let component: CRUDModalComponent;
  let fixture: ComponentFixture<CRUDModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRUDModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
