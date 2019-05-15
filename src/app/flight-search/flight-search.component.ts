import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search() {
    // this.flights = [
    //   {
    //     id: 17, from: 'London', to: 'Crete', date: '2019-05-20T17:00+01:00'
    //   },
    //   {
    //     id: 18, from: 'London', to: 'Brighton', date: '2019-05-20T17:30+01:00'
    //   }
    // ];

    const url = 'http://www.angular.at/api/flight';
     const params = { 'from': this.from, 'to': this.to };
    const headers = new HttpHeaders().set('Accept', 'application/json');

    this.http.get<Flight[]>(url, { params, headers }).subscribe(
      flights => { this.flights = flights; },
      err => { console.error('err', err); }
    );

  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }

}
