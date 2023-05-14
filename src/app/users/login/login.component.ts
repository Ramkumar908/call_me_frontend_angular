import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import data from '../../../assets/json/data.json';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { LoginUser } from '../Model/LoginUser';
import { userService } from 'src/app/Services/userService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted:boolean=false;
  showPassword:boolean=false;
  user:LoginUser;
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    rememberMe:new FormControl(false,Validators.requiredTrue)

  })
  constructor(private router: Router,private formBuilder:FormBuilder,private userService:userService) 
  {



  }
  togglePasswordVisibility()
  {
    this.showPassword=!this.showPassword;
  }
   get f(){return this.loginForm.controls;};
  //  get f() { return this.loginForm.controls; }

  
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid)
    {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    this.user.username=this.loginForm.value.username;
    this.user.password=this.loginForm.value.password;
    this.userService.userLogin(this.user).subscribe((response:any)=>{

      console.log(JSON.stringify(response))
      if(response.responseCode=200)
      {
        alert("Thanks For Connecting With Us   "+this.loginForm.value.username);
        localStorage.setItem("token",response.jwtToken);
        this.router.navigate(['/home']);

      }
      else{

        alert("Your Mail is not Verified please click on verify link send on your email");
      }
    })
   
    // if(this.loginForm.value.username=='rambabu')
    // {
    //   localStorage.setItem("userType",'admin');
    // }
    // else{
    //   localStorage.setItem("userType","employee");
    // }
   

  }

  ngOnInit(): void {

    this.user=new LoginUser();


  }





}
