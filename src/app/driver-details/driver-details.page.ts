import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.page.html',
  styleUrls: ['./driver-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DriverDetailsPage implements OnInit {
  driverData:any;
  public myDate:any;
  public amount:any;
  public selectedNumber:any;
  public amountIinfo:any;
  public selectedID:any;
  public moneySelectId:any;

  constructor(public storage:StorageService,public storageService:StorageService,private modalCtrl: ModalController) { }

  ngOnInit() {
    const driverInfo = this.storageService.myGlobalVar;
    console.log(driverInfo);
    console.log(driverInfo[0]);
    debugger;
    this.driverData = driverInfo
    
  }
  payingMoney(id:any,info:any){
    this.selectedNumber = info;
    this.selectedID = 'open-modal'+id;
  }
  save(){
    //const adjustDate = this.myDate

      this.storageService.MoneySave.push({'MobileNumber':this.selectedNumber,'paymentDate':this.myDate,'paymentAmount':this.amount});
      this.modalCtrl.dismiss();
  }
  onWillDismiss(details: any){
     console.log('onWillDismiss_onWillDismiss'+details);
  }
  payingInfo(details: any){
    this.amountIinfo = this.storageService.MoneySave;
    console.log(this.amountIinfo);
    this.moneySelectId = 'open-two'+details;
  }
  closeDemo(){
    this.modalCtrl.dismiss();
  }
}
