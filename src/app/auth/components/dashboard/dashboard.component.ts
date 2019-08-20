import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  brand: '';
  model: '';
  price: '';
  description: '';
  mobileForm: FormGroup;
  alertMsg: string = '';
  alertClass: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mobileForm = this.formBuilder.group({
      brand: ['', Validators.compose([Validators.required])],
      model: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

  mobileDetails(mobileForm) {
    console.log(mobileForm);
    this.authService.userMobileDetails(mobileForm)
    .subscribe((result) => {
      if(result.status == 'error' || result.status == 'invalid') {
        this.alertMsg = result.message;
        this.alertClass = 'danger';
      }
      if(result.status == 'success') {
        this.alertMsg = result.message;
        this.alertClass = 'success';
        this.mobileForm.reset();
      }
    });
  }

}
