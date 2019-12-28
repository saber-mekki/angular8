import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyarticleComponent } from './myarticle.component';

describe('MyarticleComponent', () => {
  let component: MyarticleComponent;
  let fixture: ComponentFixture<MyarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
