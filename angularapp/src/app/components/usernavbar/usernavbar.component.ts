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
    constructor(private ser: AuthService, private router: Router){}
    ngOnInit(): void {
      this.userName = localStorage.getItem('userName') || 'Guest';
    }
    logout(){
      this.ser.logout();
      this.router.navigate(['/home']);
    }
}
