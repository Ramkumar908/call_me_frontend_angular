import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { userService } from 'src/app/Services/userService';
import { forgetPassword } from '../Model/forgetPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  submitted:boolean=false;
  forgetPassUser:forgetPassword
    forgetUser=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })
  constructor(private router:Router,private formbuilder:FormBuilder,private userService:userService)
   {
       
   }

  ngOnInit(): void {
    this.forgetPassUser=new forgetPassword();
  }
   get f(){return this.forgetUser.controls};
  onSubmit()
  {
    this.submitted=true;
    if(this.forgetUser.invalid)
    {
      return;
    }
    this.forgetPassUser.email=this.forgetUser.get("email").value;
    this.userService.userForgotPasswot(this.forgetPassUser).subscribe((response:any)=>{
      console.log("forgot password Status"+JSON.stringify(response))
      if(response.responseCode==200)
      {

        alert("Verification link send on your regaistered email "+this.forgetPassUser.email)
        this.router.navigate(['change/password']);

        
      }
      else{
        alert("Some error getting while sending email please try again");
      }
    })
    // else{
    //   alert(" 6 Digit Otp Code send on your Registered Email "+this.forgetUser.get("email").value);
    //   this.router.navigate(['/verify'])
    // }
  }

}
