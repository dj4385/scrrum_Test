import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPostModalComponent } from './creat-post-modal.component';

describe('CreatPostModalComponent', () => {
  let component: CreatPostModalComponent;
  let fixture: ComponentFixture<CreatPostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatPostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
