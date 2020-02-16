import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TodayService {

  url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID' 

  apiKey = '34fa309f951842c840fabe87785b81cc'

  constructor(private http : HttpClient) { }

  getWeatherOutByChords( lat, lon){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units','imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }

  getWeatherOutByCity(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('unit', 'imperial')
    .set('appid', this.apiKey);
    return this.http.get(this.url, {params});
  }
}
