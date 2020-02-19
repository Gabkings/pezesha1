import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayComponent } from './today.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TodayService} from './today.service';
import {TodayMockService} from './mock-service';

describe('TodayComponent', () => {
  let component: TodayComponent;
  let fixture: ComponentFixture<TodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: TodayService, useClass: TodayMockService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getCity() when search button is clicked', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('#search');
    spyOn(component, 'getCity').and.callThrough();
    button.click();
    expect(component.getCity).toHaveBeenCalledTimes(1);
  });
  it('should call getLocation() on initialization', () => {
    spyOn(component, 'getLocation').and.callThrough();
    component.ngOnInit()
    expect(component.getLocation).toHaveBeenCalledTimes(1);
  });
});
