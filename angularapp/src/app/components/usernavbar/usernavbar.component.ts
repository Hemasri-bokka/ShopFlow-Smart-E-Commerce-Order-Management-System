import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {



  userName: string = '';

  @Output() logoutClick = new EventEmitter<void>();

  ngOnInit(): void {
    this.userName = localStorage.getItem('authenticatedUser') || 'Guest';
  }

  triggerLogoutPopup(): void {
    this.logoutClick.emit(); // Notify app.component to show popup
  }


}
