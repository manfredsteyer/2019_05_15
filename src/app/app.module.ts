import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService, DummyFlightService, DefaultFlightService } from './flight-search/flight.service';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
