import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-vehicle-reg',
  templateUrl: './vehicle-reg.page.html',
  styleUrls: ['./vehicle-reg.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VehicleRegPage implements OnInit {
  DataArray: Array<string> = [];
  constructor(public storage:Storage,public storageService:StorageService) { }

  ngOnInit() {
    
    console.log('DEMO DATA',this.storageService.myGlobalVar)
   
 
//   for(var i = 0; i < userData.length; i++) {
// if(userData[i][0]){

// }

// }

   // if(userData && userData[i] && userData[i][0].Liasnace)
       //  console.log(userData[i][0].Liasnace);
}
  

}
