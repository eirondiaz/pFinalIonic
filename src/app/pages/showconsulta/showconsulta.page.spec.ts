import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowconsultaPage } from './showconsulta.page';

describe('ShowconsultaPage', () => {
  let component: ShowconsultaPage;
  let fixture: ComponentFixture<ShowconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowconsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
