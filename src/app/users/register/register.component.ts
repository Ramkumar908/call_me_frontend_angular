import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'
import data from '../../../assets/json/data.json'
import { User } from '../Model/User';
import {FormBuilder,FormGroup,Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms'
import { userService } from 'src/app/Services/userService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  products:any=(data as any).default;
  // registerForm:FormGroup;
  submitted=false;
  categoryarray1=[];
  categoryarray2=[];
  categoryarray3=[];
  user:User;
  
  bgcolor="white";
  color="#f75d34";
  useraccount_id=2;
  password1:String="";
  confirmPass:String='';
  realPass:String;
  public showPassword: boolean = false;
  showRepeatPassword:boolean=false;
  passwordValid:boolean=false;
  imgarray=[
    {'id':1,'imagesrc':'budgetcar7.jpg','Model':'car1Model',"car_priece":245000},
    {'id':2,'imagesrc':'budgetcar8.jpg','Model':'car2Model',"car_priece":340000},
    {'id':3,'imagesrc':'budgetcar2.jpg','Model':'car3Model',"car_priece":240000}

  ]
  
 
 
  onPasswordChange() {
    if (this.repeatPassword.value == this.password.value) {
      this.repeatPassword.setErrors(null);
    } else {
      this.repeatPassword.setErrors({ mismatch: true });
    }
  }
  
  registerForm=new FormGroup({
   fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
   email:new FormControl('',[Validators.required,Validators.email]),
   phone:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
   userType:new FormControl('',[Validators.required]),
   password:new FormControl('',[Validators.required,Validators.minLength(6)]),
   repeatPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
   rememberMe:new FormControl(false,Validators.requiredTrue)
  }
  )
  get password(): AbstractControl {
    return this.registerForm.controls['password'];
  }
  
  get repeatPassword(): AbstractControl {
    return this.registerForm.controls['repeatPassword'];
  }
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private router:Router,private formBuilder:FormBuilder,private userService:userService) { }
 
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  public togglePasswordVisibility1(): void {
    this.showRepeatPassword = !this.showRepeatPassword;
   
  }
  ngOnInit(): void {

    this.user=new User();
   
  }
 
get f() { return this.registerForm.controls; }




 onSubmit()
 {
  
  
  this.submitted = true;


  if (this.registerForm.invalid) {
      return;
  } 
  

  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  this.user.username=this.registerForm.get("fullName").value;
  this.user.email=this.registerForm.get("email").value;
  this.user.phone=this.registerForm.get("phone").value;
  this.user.userType=this.registerForm.get("userType").value;
  this.user.password=this.registerForm.get("password").value;
  this.userService.userRegister(this.user).subscribe((response:any)=>{
    console.log("after api hit we get response is "+response);
    if(response.responseCode=="200")
    {
      alert("6 Digit Otp send on Your Gmail"+this.registerForm.get("email").value);
      this.router.navigate(['/login']);
    }
    else{
      alert("Registration Failed please try again ");
      return;

      

    }

  })
 
  
 }

}
