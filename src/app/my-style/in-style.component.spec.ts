import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InStyleComponent } from './in-style.component';

describe('InStyleComponent', () => {
  let component: InStyleComponent;
  let fixture: ComponentFixture<InStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
