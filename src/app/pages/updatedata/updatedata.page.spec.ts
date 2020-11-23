import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatedataPage } from './updatedata.page';

describe('UpdatedataPage', () => {
  let component: UpdatedataPage;
  let fixture: ComponentFixture<UpdatedataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatedataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
