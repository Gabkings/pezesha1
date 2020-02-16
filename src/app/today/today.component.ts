import { Component, OnInit } from '@angular/core';
import { TodayService } from './today.service';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat;
  lon;
  weather;


  constructor(private weatherService: TodayService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.watchPosition((success) =>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService.getWeatherOutByChords(this.lat, this.lon)
        .subscribe(data=>{
          this.weather = data;
          console.log(this.weather)
        });
      });
    }
  }

  getCity(city: any){
    this.weatherService.getWeatherOutByCity(city)
    .subscribe(data =>{
      this.weather = data;
      // this.lat = data.coord.lat;
      // this.lon = data.coord.lon;
    })
  }

}
