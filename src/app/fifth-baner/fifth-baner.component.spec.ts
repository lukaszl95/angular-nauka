import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthBanerComponent } from './fifth-baner.component';

describe('FifthBanerComponent', () => {
  let component: FifthBanerComponent;
  let fixture: ComponentFixture<FifthBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
