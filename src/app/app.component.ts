import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
//import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private router: Router,
   // private storage: Storage,
    private platform: Platform,
    private storage: Storage
  ) {
    this.platform
    .ready()
    .then(async () => {
      await this.storage.create();

      // const user = await this.storage.get('userInfo');
      // if (user === null || typeof(user) === 'undefined') {
      //  // this.router.navigate(OnboardingPage);
      //   this.router.navigate(['/login-page'])

      //   return;
      // }
    })
  }
}
