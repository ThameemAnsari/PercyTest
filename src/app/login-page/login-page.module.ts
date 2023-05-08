import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { LoginPagePage } from './login-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [LoginPagePage],
  providers:[Storage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPagePageModule {}
