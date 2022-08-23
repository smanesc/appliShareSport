import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandoInfoComponent } from './rando-info.component';

describe('RandoInfoComponent', () => {
  let component: RandoInfoComponent;
  let fixture: ComponentFixture<RandoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
