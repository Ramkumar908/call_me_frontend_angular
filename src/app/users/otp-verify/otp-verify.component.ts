import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent implements OnInit {

  submitted:boolean=false;
  userVerify=new FormGroup({
    userOtp:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  constructor(private router:Router ,private formBuilder:FormBuilder)
   {

    }
    get f(){ return this.userVerify.controls;}

    onSubmit()
    {
      this.submitted=true;
      if(this.userVerify.invalid)
      {
        return;
      }
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userVerify.value, null, 4));
      alert("Successfully Verifid Please Set your New Password  ");
      this.router.navigate(['/change/password']);

    }

  ngOnInit(): void {
  }

}
