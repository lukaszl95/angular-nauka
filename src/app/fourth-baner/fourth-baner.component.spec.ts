import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthBanerComponent } from './fourth-baner.component';

describe('FourthBanerComponent', () => {
  let component: FourthBanerComponent;
  let fixture: ComponentFixture<FourthBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
