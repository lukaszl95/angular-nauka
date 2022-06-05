import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundBanerComponent } from './secound-baner.component';

describe('SecoundBanerComponent', () => {
  let component: SecoundBanerComponent;
  let fixture: ComponentFixture<SecoundBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecoundBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
