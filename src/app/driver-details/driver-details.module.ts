import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DriverDetailsPage } from './driver-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [DriverDetailsPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DriverDetailsPageModule {}
