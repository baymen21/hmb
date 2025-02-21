import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeUserComponent } from './add-type-user.component';

describe('AddTypeUserComponent', () => {
  let component: AddTypeUserComponent;
  let fixture: ComponentFixture<AddTypeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTypeUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
