import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {

    console.log("calling from the logout console page and also get the data ");
    if (this.auth.isLoggedIn())
    {
      localStorage.setItem('token','');
      localStorage.setItem('userType','');
    }
    alert("You are successfully Logged out");
    this.router.navigate(['/login'])
    
  }

}
