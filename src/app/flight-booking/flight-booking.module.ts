import { NgModule } from '@angular/core';
import { FlightBookingComponent } from './flight-booking.component';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService, DefaultFlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
  ],
  declarations: [
    FlightBookingComponent,
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent
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
