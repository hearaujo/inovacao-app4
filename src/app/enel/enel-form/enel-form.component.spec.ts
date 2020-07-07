import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnelFormComponent } from './enel-form.component';

describe('EnelFormComponent', () => {
  let component: EnelFormComponent;
  let fixture: ComponentFixture<EnelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
