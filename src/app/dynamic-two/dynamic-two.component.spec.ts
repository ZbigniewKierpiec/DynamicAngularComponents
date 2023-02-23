import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTwoComponent } from './dynamic-two.component';

describe('DynamicTwoComponent', () => {
  let component: DynamicTwoComponent;
  let fixture: ComponentFixture<DynamicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
