import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from 'src/app/results/results.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'src/app/search/search.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'home', component: SearchComponent },
  { path: 'results', component: ResultsComponent, data: {} },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent, 
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
