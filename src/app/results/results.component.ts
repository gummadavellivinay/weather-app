import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{

  weatherData;
  locationName = '';
  currentTempF = '';
  currentTempC = '';
  condition = '';
  wind = '';

  constructor(private router: Router){
    this.weatherData =  this.router.getCurrentNavigation()?.extras.state
    console.log(this.weatherData)

    if(this.weatherData){
      this.locationName = this.weatherData['location'].name || '';
      this.currentTempF = this.weatherData['current'].temp_f || '';
      this.currentTempC = this.weatherData['current'].temp_c || '';
      this.condition = this.weatherData['current'].condition.text || '';
      this.wind = this.weatherData['current'].wind_mph || '';
    }
  }
  ngOnInit(): void {
  }

  goToSearch = () => {
    this.router.navigate(['home']);
  }
}
