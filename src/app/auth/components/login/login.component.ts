import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string = '';
  // password: string = '';
  loginForm: FormGroup;
  alertMsg: string = '';
  alertClass: string = '';
  btnDisabled: boolean = false;
  // fetch

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login(loginForm){
    this.btnDisabled = true;
    this.authService.userLogin(loginForm)
    .subscribe((result) => {
      this.btnDisabled = false;
      if(result.status == 'error' || result.status == 'invalid') {
        this.alertMsg = result.message;
        this.alertClass = 'danger';
      }
      if(result.status == 'success') {
        this.alertMsg = result.message;
        this.alertClass = 'success';
        this.loginForm.reset();
        localStorage.removeItem('user_token');
        localStorage.setItem('user_token', JSON.stringify(result.user));
        this.userService.changeMessage(true);
        this.router.navigateByUrl('/auth/dashboard');
      }
    });
  }

}