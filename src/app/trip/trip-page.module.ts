import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { TripPage } from './trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [TripPage],
  providers:[Storage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TripPagePageModule {}
