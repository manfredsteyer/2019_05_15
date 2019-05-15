import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService, DummyFlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    // { provide: FlightService, useClass: DummyFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) { }

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

    this.flightService.find(this.from, this.to).subscribe(
      flights => { this.flights = flights; },
      err => { console.error('err', err); }
    );

  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }

}


