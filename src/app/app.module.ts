import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
// import { DataAccessModule } from '@flight-app/data-access';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      // DataAccessModule,
      // FlightBookingModule, // <--- would prevent lazy loading
      RouterModule.forRoot(APP_ROUTES, {
         preloadingStrategy: PreloadAllModules
      })
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      ErrorComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
