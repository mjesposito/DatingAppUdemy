import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Datting App';
  users: any;

  constructor(private accountServices: AccountService, private presence: PresenceService) {}
  
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountServices.setCurrentUser(user);
      this.presence.createHUbConnection(user);
    }
  }

}
