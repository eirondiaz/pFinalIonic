import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowallvisitasPage } from './showallvisitas.page';

describe('ShowallvisitasPage', () => {
  let component: ShowallvisitasPage;
  let fixture: ComponentFixture<ShowallvisitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallvisitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowallvisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
