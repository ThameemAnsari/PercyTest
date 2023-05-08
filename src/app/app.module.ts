import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePagePage } from './home-page/home-page.page';
import { LoginPagePage } from './login-page/login-page.page';
import { DriverRegPage } from './driver-reg/driver-reg.page';
import { VehicleRegPage } from './vehicle-reg/vehicle-reg.page';
import { LoginPagePageModule } from './login-page/login-page.module';
import { HomePagePageModule } from './home-page/home-page.module';
import { DriverPagePageModule } from './driver-reg/driver-reg-page.module';
import { VehiclePagePageModule } from './vehicle-reg/vehicle-reg-page.module';
import { DriverDetailsPageModule } from './driver-details/driver-details.module';
import { TripPagePageModule } from './trip/trip-page.module';
import { DriverDetailsPage } from './driver-details/driver-details.page';
import { TripPage } from './trip/trip.page';

@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    LoginPagePageModule,
    HomePagePageModule,
    DriverPagePageModule,
    VehiclePagePageModule,
    DriverDetailsPageModule,

    TripPagePageModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HomePagePage,
    LoginPagePage,
    DriverRegPage,
    VehicleRegPage,
    DriverDetailsPage,
    TripPage
  ],
  providers: [
    
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
