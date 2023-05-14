import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator,FormControl, Validators, AbstractControl} from '@angular/forms'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  showPassword:boolean=false;
  submitted:boolean=false;
  showConfirm_password:boolean=false;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  changePassForm=new FormGroup({
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirm_password:new FormControl('',[Validators.required,Validators.minLength(6)])
  
  })
  get f(){return this.changePassForm.controls;}

  togglePasswordVisibility1()
  {
  this.showConfirm_password=!this.showConfirm_password;
  }
  togglePasswordVisibility()
  {
  this.showPassword=!this.showPassword;
  }
  onPasswordChange()
  {
    if(this.confirm_password.value==this.password.value)
    {
      this.confirm_password.hasError(null);

    }
    else{
      this.confirm_password.setErrors({ mismatch: true });

    }
  }

  get password():AbstractControl{return this.changePassForm.controls['password']}

  get confirm_password():AbstractControl{return this.changePassForm.controls['confirm_password']}
  onSubmit()
  {
    this.submitted=true;
    if(this.changePassForm.invalid)
    {
      return;
    }
    alert("Your Password is changes Please Login Again");
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
