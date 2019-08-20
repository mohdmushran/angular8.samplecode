import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // name: '';
  // email: '';
  // password: '';
  // repeatPassword: '';
  registrationForm: FormGroup;  
  alertMsg: string = '';
  alertClass: string = '';
  btnDisabled: boolean = false;
  // fetch

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.compose([Validators.required])]
    }, {validator: this.checkPasswords });
  }

  register(registrationForm) {
    this.btnDisabled = true;
    this.authService.userRegistration(registrationForm)
    .subscribe((result) => {
      this.btnDisabled = false;
      if(result.status == 'error' || result.status == 'invalid'){
        this.alertMsg = result.message;
        this.alertClass = 'danger';
      }
      if(result.status == 'success'){
        this.alertMsg = result.message;
        this.alertClass = 'success';
        this.registrationForm.reset();
      }
    });
  }

  checkPasswords(group: FormGroup){
    let password = group.controls.password.value;
    let repeatPassword = group.controls.repeatPassword.value;

    return password == repeatPassword ? null : {passwordNotSame: true}
  }

}