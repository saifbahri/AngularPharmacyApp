import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproviderComponent } from './addprovider.component';

describe('AddproviderComponent', () => {
  let component: AddproviderComponent;
  let fixture: ComponentFixture<AddproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
