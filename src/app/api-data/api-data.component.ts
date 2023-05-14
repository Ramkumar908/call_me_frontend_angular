import { Component, OnInit } from '@angular/core';
import {FlaskApiService} from '../flask-api.service'
import {FormControl, Validators} from '@angular/forms'
import{FormGroup} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import { Router ,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {

   employeeData=[];
   userForm=new FormGroup({
    username:new FormControl('',Validators.required),
    usermail:new FormControl('',[Validators.required,Validators.email]),
    userpass:new FormControl('',[Validators.required,Validators.minLength(5)])

   })


   model:any;
   name="ramkumar";
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  public get form():any
  {
    return this.userForm.controls;
  }
  public  get username():any 
  {
     return this.userForm.get('username');
  }
  // get username():any{return this.userForm.get('username')}
  public  get usermail():any
  {
    return this.userForm.get('usermail');
  }
public get userpass():any
{
  return this.userForm.get('userpass');
}
  

  
  ngOnInit()
  {
    let mycarmodel=null
    //const imageId = this.route.snapshot.paramMap.get('id');
    let imagemodel=this.route.params.subscribe(data =>{
      this.model= +data['model'];
     // console.log("The data is"+data['model']);
      mycarmodel=data['model'];
    })
   console.log("The car model we get here is "+mycarmodel);
  }

  onSUbmit()
  {
    alert(JSON.stringify(this.userForm.value));
    // this.http.post("http://localhost:5000/sign_Up",data)
    // .subscribe((result)=>{
    //   console.log("the form result is "+result);
    // })
  
    // console.log("hey this is my name"+data.username);
    // console.log("hey this is my email"+data.usermail);
    // console.log("hey this is my password"+data.userpass);
  }
  clear()
  {   

    this.username.reset();
    this.usermail.reset();
    this.userpass.reset();
     }

     showDetail()
     {
       console.log("before sending to the other page the name is "+this.name);
     //this.router.navigate(['userdetail',this.name]);
     this.router.navigate(['/userdetail',this.name]);
     }
  

}
