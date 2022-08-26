import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { switchMap, pipe, of, debounceTime, distinctUntilChanged } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor(private weatherService: WeatherService, private router: Router){}

  searchCitiesCtrl = new FormControl();
  title = 'weather-app';
  city = '';
  options: any[] = [];

  ngOnInit(): void {
    this.getCityNames();
  }

  getCityNames = () => {
    this.searchCitiesCtrl.valueChanges
    .pipe(
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((value) =>  value && this.weatherService.getCitySuggestions(value))
    )
    .subscribe((results: any) => {
      const resultsMap: any[] = results;
      this.options = resultsMap.reduce((acc, val)=> {
      //  if(val.name?.indexOf(this.city) > -1) {
          acc.push(val.name);
      //  }
        return acc;
      }, [])
      //.filter(val => val);
      console.log(this.options);
    });
  }

  getWeatherData = (cityName: string) => {
    
    this.weatherService
    .getWeatherInfo(cityName).subscribe((res) => {
      const navigationExtras: NavigationExtras = {
        state: res
      };
      this.router.navigate(['results'],navigationExtras)
    })
  }
}
