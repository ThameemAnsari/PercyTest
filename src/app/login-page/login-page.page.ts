import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPagePage implements OnInit {
public password:any;
public email:any;

  constructor(private router: Router) { }

  ngOnInit() {
   // const user = await this.storage.get(User.userKey);
  }

  async login() {
    // TODO: Implement login logic
    // if (this.email === 'pavan.alapati@mytruck.com' && this.password === 'Venu@123') {
    //   // Successful login, navigate to home page
    //   // Successful login, navigate to home page
    //   //this.storage.set('userInfo', 'true');
    //   this.router.navigate(['/home-page'])

    // } else {
    //   // Invalid credentials, show error message
    //   alert('Invalid credentials');
    // }
    this.router.navigate(['/home-page'])
  }

}
