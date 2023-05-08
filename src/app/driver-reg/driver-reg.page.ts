import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageService } from '../services/storage.service';
import { Preferences } from '@capacitor/preferences';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-driver-reg',
  templateUrl: './driver-reg.page.html',
  styleUrls: ['./driver-reg.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DriverRegPage implements OnInit {
  username:any;
  email:any;
  password:any;
  confirmPassword:any;
  Liasnace:any;
  phoneNumber:any;
  phonePay:any;
  aadhar:any;
  amount:any;
  
  msginputvalue:boolean = false
  liasnaceInputvalue:boolean = false;
  phoneNumberInputvalue:boolean = false;
  phonePeInputvalue:boolean = false;
  constructor( private toastController: ToastController,private navController: NavController,private storage: Storage,private alertController: AlertController,public storageService:StorageService) { }

  async ngOnInit() {
    //const setName = async () => {
      await Preferences.set({
        key: 'name',
        value: 'Max',
      });
   // };
  }
  public async register(){



  //   var data = this.storageService.myGlobalVar.find(function(ele) {
  //     return ele["Liasnace"] == this.Liasnace;
  // });


  // let userData = this.storageService.myGlobalVar
 
  // for(var i = 0; i < userData.length; i++) {
  //     console.log(JSON.stringify(userData[i][0].Liasnace));
  // }




 let validateStatus = (!this.msginputvalue && !this.liasnaceInputvalue && !this.phoneNumberInputvalue && !this.phonePeInputvalue) ? true : false;
if(this.aadhar && this.username && this.phoneNumber && this.Liasnace && this.phonePay && validateStatus){
  this.storageService.myGlobalVar.push({'driverName':this.username,'AADHARCard':this.aadhar,'Liasnace':this.Liasnace,'phoneNumber':this.phoneNumber,'PhonePay':this.phonePay,'TotalPaid':0});
  const toast = await this.toastController.create({
    message: 'Successfully driver registry',
    duration: 1500,
    position: 'bottom'
  });

  await toast.present();

  this.navController.back();
}else{
  const alert = await this.alertController.create({
    header: 'Please ',
    message: 'Please fill all required fields!',
    buttons: ['OK'],
  });

  await alert.present();
}




  
  
  
  }
  changeAadhar(){
    if (this.aadhar.length == '12')
    this.msginputvalue = false;
  else
    this.msginputvalue = true;
  }
  changeLiasnace(){
    if (this.Liasnace.length == '15')
    this.liasnaceInputvalue = false;
  else
    this.liasnaceInputvalue = true;
  }
  
  changePhoneNumber(){
    if (this.phoneNumber.length == '10')
    this.phoneNumberInputvalue = false;
  else
    this.phoneNumberInputvalue = true;
  }
  
  changePhonePay(){
    if (this.phonePay.length == '10')
    this.phonePeInputvalue = false;
  else
    this.phonePeInputvalue = true;
  }
}
