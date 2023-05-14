// import { Component, OnInit } from '@angular/core';
// import { Router,ActivatedRoute } from '@angular/router';
// import { AppRoutingModule } from '../app-routing.module';
// import similar_list from '../../jsonfiles/similar_list.json'
// import { element } from 'protractor';



// @Component({
//   selector: 'app-similar-list',
//   templateUrl: './similar-list.component.html',
//   styleUrls: ['./similar-list.component.scss']
// })
// export class SimilarListComponent implements OnInit {

//   product_model:any;
//   productcount:number=0;
//   headingtext:boolean=true;
//   cateegorytype:any;
//   categoryarray=[];


//   constructor(private router:Router,private rouets:ActivatedRoute)
//    {
     
//     this.product_model=this.router.getCurrentNavigation().extras.state;
//     this.cateegorytype=this.product_model.category_name;

//     //console.log(similar_list[1]);
    
//     //console.log("product model is "+this.product_model.category_name);
//     // this.product_model.forEach(element => {
//     //   console.log(element.name);
      
//     // });

//     }

//   ngOnInit(): void 
//   {
//     //this.categoryarray=similar_list.mycategories[1];
//     for(var i=0;i<similar_list.mycategories.length;i++)
//      {
//       var obj=similar_list.mycategories[i];

//        if(this.cateegorytype=='category1')
//        {

//         console.log("category type is"+this.cateegorytype);

//          this.categoryarray=obj.category1;
//        }
       
//        ;
//     if(this.cateegorytype=='category2')
//        {
//         console.log("category type is"+this.cateegorytype);

//          this.categoryarray=obj.category2;
//        }
//        if(this.cateegorytype=='category3')
//        {
//         console.log("category type is"+this.cateegorytype);

//          this.categoryarray=obj.category3;
//        }
//      }
    

//   }


//   sendDetailPage(productDetail)
//   {
//     console.log("function called"+JSON.stringify(productDetail));
//     this.router.navigateByUrl('prduct_detail', {state:productDetail});
//   }
// }

import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router,NavigationExtras,ActivatedRoute,ParamMap } from '@angular/router'
import data from '../../assets/json/data.json'

@Component({
     selector: 'app-similar-list',
     templateUrl: './similar-list.component.html',
     styleUrls: ['./similar-list.component.scss']
   })
   export class SimilarListComponent implements OnInit {

  products:any=(data as any).default;

  categoryarray1=[];
  categoryarray2=[];
  categoryarray3=[];
  categoryarray4=[];
  getCategoryName:string;
  categoryName:any;

  
  bgcolor="white";
  color="#f75d34";
  useraccount_id=2;
  

  @Output() public sidenavToggle = new EventEmitter();
  constructor(private router:Router,private route :ActivatedRoute) { }

  ngOnInit(): void {


  this.route.paramMap.subscribe((params: ParamMap)=>{
    this.categoryName= params.get('category');
    //console.log('get categoryName is '+this.categoryName);
    this.setTheCategoryOnclick();
  })
  
   
   
   

  }
  getImageDetails(id:any,category:any)
  {
   // console.log("get Image id and category_name"+ id + "  "+category);
    this.router.navigate(['/prduct_detail',{'id':id,'category':category}]);
  }
  setTheCategoryOnclick()
  {

    data.painters.forEach(element=>{
      //console.log(element.name);
    })
    if(this.categoryName=='painters')
    {
    this.categoryarray1=data.painters;
    this.categoryName=data.painters['category_name'];
    //console.log('getCategoryName '+this.getCategoryName);
    this.categoryarray2=data.electrician;
    this.categoryarray3=data.plumber;
    this.categoryarray4=data.civilworker;
    
    }
    else if(this.categoryName=='electrician'){
    this.categoryarray1=data.electrician;
   // this.categoryName=data.painters['category_name'];
   // console.log('getCategoryName '+this.getCategoryName);

    this.categoryarray2=data.painters;
    this.categoryarray3=data.plumber;
    this.categoryarray4=data.civilworker;
    
    }
    else if(this.categoryName=='plumbers')
    {
      this.categoryarray1=data.plumber;
      this.categoryName=data.painters['category_name'];
     // console.log('getCategoryName '+this.getCategoryName);
      this.categoryarray2=data.painters;
      this.categoryarray3=data.electrician;
      this.categoryarray4=data.civilworker;
       
    }
    else if(this.categoryName=='civil'){
      this.categoryarray1=data.civilworker;
      this.categoryName=data.painters['category_name'];
   // console.log('getCategoryName '+this.getCategoryName);

      this.categoryarray2=data.painters;
      this.categoryarray3=data.electrician;
      this.categoryarray4=data.plumber;
    }
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

