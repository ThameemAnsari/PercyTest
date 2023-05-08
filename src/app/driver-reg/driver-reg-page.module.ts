import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DriverRegPage } from './driver-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [DriverRegPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DriverPagePageModule {}
