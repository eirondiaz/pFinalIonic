import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowallconsultasPage } from './showallconsultas.page';

describe('ShowallconsultasPage', () => {
  let component: ShowallconsultasPage;
  let fixture: ComponentFixture<ShowallconsultasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallconsultasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowallconsultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
