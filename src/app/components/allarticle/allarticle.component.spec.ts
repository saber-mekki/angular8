import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllarticleComponent } from './allarticle.component';

describe('AllarticleComponent', () => {
  let component: AllarticleComponent;
  let fixture: ComponentFixture<AllarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
