import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOneComponent } from './dynamic-one.component';

describe('DynamicOneComponent', () => {
  let component: DynamicOneComponent;
  let fixture: ComponentFixture<DynamicOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
