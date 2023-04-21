import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreodepesoComponent } from './monitoreodepeso.component';

describe('MonitoreodepesoComponent', () => {
  let component: MonitoreodepesoComponent;
  let fixture: ComponentFixture<MonitoreodepesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreodepesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoreodepesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
