import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IptuFormComponent } from './iptu-form.component';

describe('IptuFormComponent', () => {
  let component: IptuFormComponent;
  let fixture: ComponentFixture<IptuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
