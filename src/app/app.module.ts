import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';

//modules
import {CalendarModule} from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
//emojis
import { AngularEmojisModule } from 'angular-emojis';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    FormsModule,
    AngularEmojisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit() {
    this.primengConfig.ripple = true;
}



}
