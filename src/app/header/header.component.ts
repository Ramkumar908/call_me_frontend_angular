import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'
import data from '../../assets/json/data.json';

//import * as data from '';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categoryName:any;
  constructor(private router:Router){}
  ngOnInit(): void {
 }
   callAllpainters(worker:any) 
  {
    this.categoryName=worker;
    console.log("get called by all functions");
    this.router.navigate(['/similar_data_list/',{'category':worker}]);
  }

  

}


