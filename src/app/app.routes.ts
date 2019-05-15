import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
