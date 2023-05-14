import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'
import data from '../../assets/json/data.json';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  products:any = (data as any).default;
  categoryName:any;
  categoryarray1=[];
  categoryarray2=[];
  categoryarray3=[];
  categoryarray4=[];


  
  bgcolor="white";
  color="#f75d34";
  useraccount_id=2;
  imgarray=[
    {'id':1,'imagesrc':'budgetcar7.jpg','Model':'car1Model',"car_priece":245000},
    {'id':2,'imagesrc':'budgetcar8.jpg','Model':'car2Model',"car_priece":340000},
    {'id':3,'imagesrc':'budgetcar2.jpg','Model':'car3Model',"car_priece":240000}
  ]
  @Output() public sidenavToggle = new EventEmitter();
   constructor( private router:Router){}

  ngOnInit(): void {
    //console.log(typeof data)
    this.categoryName='Rambabu';
    
    data.painters.forEach(element=>{
      //console.log(element.name);
    })
    this.categoryarray1=data.painters;
    this.categoryarray2=data.electrician;
    this.categoryarray3=data.plumber;
    this.categoryarray4=data.civilworker;

   
  }
  getAllworker(worker:any)
  {
    this.router.navigate(['/similar_data_list',{'category':worker}]);
  }
  public onToggleSidenav=()=>
  {
    this.sidenavToggle.emit();
    

  }
   sendTodata(product)
  {  
    let myproduct=JSON.stringify(product);
    //let navigationExtras:NavigationExtras={queryParams:product}

    //.log("HIIIIIIII"+navigationExtras)
    this.router.navigateByUrl('similar_data_list',{state:product})
    //this.router.navigate(['similar_data_list'],{state:product});
}

}
