import { Component } from '@angular/core';
import{Event, Router ,NavigationStart, NavigationEnd,NavigationCancel,NavigationError, RouterEvent} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularWithFlask';
  load=true;
  preload=true;
  constructor(private router:Router)
  {
    this.preload=false;
    console.log("preloader false");
    this.router.events.subscribe((RouterEvent: Event)=>{
      if(RouterEvent instanceof NavigationStart){
        this.load = true;
        console.log("load true");
      }
      if(RouterEvent instanceof NavigationEnd || RouterEvent instanceof NavigationCancel || RouterEvent instanceof NavigationError){
        this.load = false;
        console.log("load false");
      }
    });

  }
  
}
