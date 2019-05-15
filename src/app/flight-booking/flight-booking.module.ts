import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightSearchComponent } from '../flight-search/flight-search.component';
import { FlightService, DefaultFlightService } from '../flight-search/flight.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FlightBookingComponent,
    FlightSearchComponent
  ],
  providers: [
    { provide: FlightService, useClass: DefaultFlightService }
    // ^^ Global Service
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
