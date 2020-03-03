import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDtlsComponent } from './contact-dtls.component';

describe('ContactDtlsComponent', () => {
  let component: ContactDtlsComponent;
  let fixture: ComponentFixture<ContactDtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
