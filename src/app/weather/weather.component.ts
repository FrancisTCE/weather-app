import { Component } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent {
  //weatherData="Weather data goes here";
  weatherData : any
  sendRequest = async () => {
    // url = https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.13&current_weather=true
    console.log("Getting weather in lisbon")
    fetch('https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.13&current_weather=true')
      .then((response) => response.json())
      .then((data) => this.weatherData = data);
    };  

  
}

