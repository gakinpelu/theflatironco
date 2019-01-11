import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingclientComponent } from './pendingclient.component';

describe('PendingclientComponent', () => {
  let component: PendingclientComponent;
  let fixture: ComponentFixture<PendingclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
