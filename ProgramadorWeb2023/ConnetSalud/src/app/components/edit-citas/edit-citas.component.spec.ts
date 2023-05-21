import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitasComponent } from './edit-citas.component';

describe('EditCitasComponent', () => {
  let component: EditCitasComponent;
  let fixture: ComponentFixture<EditCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
