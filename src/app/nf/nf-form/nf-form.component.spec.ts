import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfFormComponent } from './nf-form.component';

describe('NfFormComponent', () => {
  let component: NfFormComponent;
  let fixture: ComponentFixture<NfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
