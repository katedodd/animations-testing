import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWindowComponent } from './container-window.component';

describe('ContainerWindowComponent', () => {
  let component: ContainerWindowComponent;
  let fixture: ComponentFixture<ContainerWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
