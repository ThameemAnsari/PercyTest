import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login-page',
    loadComponent: () => import('./login-page/login-page.page').then( m => m.LoginPagePage)
  },
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadComponent: () => import('./home-page/home-page.page').then( m => m.HomePagePage)
  },
  {
    path: 'driver-reg',
    loadComponent: () => import('./driver-reg/driver-reg.page').then( m => m.DriverRegPage)
  },
  {
    path: 'vehicle-reg',
    loadComponent: () => import('./vehicle-reg/vehicle-reg.page').then( m => m.VehicleRegPage)
  },
  {
    path: 'driver-details',
    loadComponent: () => import('./driver-details/driver-details.page').then( m => m.DriverDetailsPage)
  },
  {
    path: 'trip',
    loadComponent: () => import('./trip/trip.page').then( m => m.TripPage)
  }
];
