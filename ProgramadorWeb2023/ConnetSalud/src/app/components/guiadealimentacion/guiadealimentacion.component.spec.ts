import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiadealimentacionComponent } from './guiadealimentacion.component';

describe('GuiadealimentacionComponent', () => {
  let component: GuiadealimentacionComponent;
  let fixture: ComponentFixture<GuiadealimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiadealimentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiadealimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
