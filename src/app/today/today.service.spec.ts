import {getTestBed, TestBed} from '@angular/core/testing';

import {TodayService} from './today.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TodayService', () => {
  let service: TodayService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const sampleLocation = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1582027200,
        main: {
          temp: 298.69,
          feels_like: 295.25,
          temp_min: 298.69,
          temp_max: 300.35,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 841,
          humidity: 42,
          temp_kf: -1.66
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          }
        ],
        clouds: {
          all: 4,
        },
        wind: {
          speed: 5.65,
          deg: 66,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-18 12:00:00'
      }
    ],
    city: {
      id: 184745,
      name: 'Nairobi'
    },
    coord: {
      lat: -1.2833,
      lon: 36.8167
    },
    country: 'KE',
    population: 2750547,
    timezone: 10800,
    sunrise: 1581997344,
    sunset: 1582041080,

  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(TodayService);
    injector = getTestBed();
    service = TestBed.get(TodayService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getWeatherOutByChords  via GET', () => {
    service.getWeatherOutByChords(1, 36.55).subscribe(res => {
      expect(res).toBeTruthy();
      // expect(res).toEqual(applications);
    });
    const request = httpMock.expectOne('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID&lat=1&lon=36.55&units=imperial&appid=34fa309f951842c840fabe87785b81cc');
    expect(request.request.method).toBe('GET');

    request.flush(sampleLocation);
  });

  it('should getWeatherOutByCity via GET', () => {
    service.getWeatherOutByCity('Nairobi').subscribe(res => {
      expect(res).toBeTruthy();
      // expect(res).toEqual(applications);
    });
    const request = httpMock.expectOne('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID&q=Nairobi&unit=imperial&appid=34fa309f951842c840fabe87785b81cc');
    expect(request.request.method).toBe('GET');

    request.flush(sampleLocation);
  });
});
