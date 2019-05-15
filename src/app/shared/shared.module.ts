import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CityPipe
    ],
    providers: [],
    exports: [
        CityPipe,
        FormsModule,
        CommonModule
    ],
})
export class SharedModule { }
