import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBanerComponent } from './third-baner.component';

describe('ThirdBanerComponent', () => {
  let component: ThirdBanerComponent;
  let fixture: ComponentFixture<ThirdBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
