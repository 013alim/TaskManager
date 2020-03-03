import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDtlsComponent } from './personal-dtls.component';

describe('PersonalDtlsComponent', () => {
  let component: PersonalDtlsComponent;
  let fixture: ComponentFixture<PersonalDtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
