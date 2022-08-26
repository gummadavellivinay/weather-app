import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient){
    }
    url = 'https://weatherapi-com.p.rapidapi.com/'
    getWeatherInfo = (cityName: string) => {
        const methodName = 'current.json?q=';
        const reqHeaders  = {
            'X-RapidAPI-Key': '967d161a6fmsh6d884ac6d4a6234p1537ccjsne551155876b7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        return this.http.get(this.url + methodName + cityName, { headers : reqHeaders })
    }

    getCitySuggestions(inputCity: string) {
        const methodName = 'search.json?q='; 
        const reqHeaders  = {
            'X-RapidAPI-Key': '967d161a6fmsh6d884ac6d4a6234p1537ccjsne551155876b7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        return this.http.get(this.url + methodName + inputCity, { headers : reqHeaders })
    }
  }
  