import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http' ;
import {HolelDataServiceService} from './holel-data-service.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HolelDataServiceService],//service providers are put here
  bootstrap: [AppComponent]
})
export class AppModule { }
