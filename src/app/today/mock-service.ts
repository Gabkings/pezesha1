import {of} from 'rxjs';

export class TodayMockService {
  getWeatherOutByChords() {
    return of(
    );
  }

  getWeatherOutByCity() {
    return of(
      {
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

      }
    );
  }
}
