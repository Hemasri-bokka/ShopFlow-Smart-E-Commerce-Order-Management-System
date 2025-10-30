import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

    userName: string = '';
    showLogoutPopup: boolean = false;
    constructor(private ser: AuthService, private router: Router){}
    ngOnInit(): void {
      this.userName = localStorage.getItem('userName') || 'Guest';
    }

  openLogoutPopup(): void {
    this.showLogoutPopup = true;
  }

  // Confirm logout
  logout(): void {
    this.ser.logout();
    this.showLogoutPopup = false;
    this.router.navigate(['/home']);
  }

  // Cancel logout
  cancelLogout(): void {
    this.showLogoutPopup = false;
  }
}
