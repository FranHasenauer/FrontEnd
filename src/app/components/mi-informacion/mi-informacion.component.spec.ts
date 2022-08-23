import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiInformacionComponent } from './mi-informacion.component';

describe('MiInformacionComponent', () => {
  let component: MiInformacionComponent;
  let fixture: ComponentFixture<MiInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
