import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { VehicleRegPage } from './vehicle-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [VehicleRegPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehiclePagePageModule {}
