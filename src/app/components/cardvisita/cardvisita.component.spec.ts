import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardvisitaComponent } from './cardvisita.component';

describe('CardvisitaComponent', () => {
  let component: CardvisitaComponent;
  let fixture: ComponentFixture<CardvisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardvisitaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardvisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
