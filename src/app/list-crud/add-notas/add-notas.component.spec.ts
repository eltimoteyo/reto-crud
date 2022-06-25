import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotasComponent } from './add-notas.component';

describe('AddNotasComponent', () => {
  let component: AddNotasComponent;
  let fixture: ComponentFixture<AddNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
