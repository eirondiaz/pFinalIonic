import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteprofilePage } from './pacienteprofile.page';

describe('PacienteprofilePage', () => {
  let component: PacienteprofilePage;
  let fixture: ComponentFixture<PacienteprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
