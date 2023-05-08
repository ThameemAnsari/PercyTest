import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  driver(){
    this.router.navigate(['/driver-reg']);
  }
  vehicle(){
    this.router.navigate(['/vehicle-reg']);
  }
  DriverInfo(){
    this.router.navigate(['/driver-details']);
  }
  Trip(){
    this.router.navigate(['/trip']);

    
  }
  VehicleInfo(){

  }
  TripInfo(){

  }
  Report(){

  }
}
