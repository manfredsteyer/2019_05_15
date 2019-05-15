import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Flight } from '../../models/flight';


export abstract class FlightService {

  flights: Flight[];

  abstract load(from: string, to: string);
  abstract find(from: string, to: string): Observable<Flight[]>;
}

export class DummyFlightService implements FlightService {
  flights: Flight[];
  
  load(from: string, to: string) {

  }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'London', to: 'Crete', date:'2019-05-15T17:00+01:00'},
      { id: 18, from: 'London', to: 'Brighton', date:'2019-05-15T17:20+01:00'}
    ]);
  }

}

@Injectable({
  providedIn: 'root'
})
export class DefaultFlightService implements FlightService {

  flights: Flight[] = [];

  constructor(private http: HttpClient) { }

  load(from: string, to: string) {
    this.find(from, to).subscribe(
      flights => { this.flights = flights; },
      err => { console.error('err', err); }
    )
  }

  find(from: string, to: string): Observable<Flight[]> {

    // .subscribe(
    //    (flights) => { ... })

    const url = 'http://www.angular.at/api/flight';
    const params = { 'from': from, 'to': to };
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }


}

