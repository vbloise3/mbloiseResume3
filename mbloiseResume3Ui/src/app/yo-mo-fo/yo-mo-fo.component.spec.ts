import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoMoFoComponent } from './yo-mo-fo.component';

describe('YoMoFoComponent', () => {
  let component: YoMoFoComponent;
  let fixture: ComponentFixture<YoMoFoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoMoFoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoMoFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
