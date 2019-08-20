import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isloggedIn: boolean = false;
  userName: string = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getUserName();
  }

  logout() {
    // console.log('testing');
    this.userService.changeMessage(false);
    localStorage.removeItem('user_token');
    this.router.navigateByUrl('/auth/login');
  }

  isLoggedIn() {
    this.userService.currentMessage.subscribe(message => {
      if (message == true) {
        this.isloggedIn = true;
      } else {
        this.isloggedIn = false;
      }
    });
  }

  getUserName() {
    this.userService.currentName.subscribe(message => {
      var user = localStorage.getItem('user_token');
      if (user != null) {
        let objUser = JSON.parse(user);
        this.userName = objUser.name;
      }
    });
    
  }

}