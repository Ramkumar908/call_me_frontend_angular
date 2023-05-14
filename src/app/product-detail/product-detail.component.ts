import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { element } from 'protractor';
import { from } from 'rxjs';
import data from '../../assets/json/data.json'
import data2 from '../../assets/json/data2.json';

// import { timeStamp } from 'console';

declare function addItem(): any;
declare function calculateprice(): any;
declare function addcart(): any;
declare function removeItem(): any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})




export class ProductDetailComponent implements OnInit {

  products: any = (data as any).default;
  selectedOption: string;
  printedOption: string;
  categoryarray1 = [];
  categoryarray2 = [];
  categoryarray3 = [];
  currentProductDetails= [];//
  similarProductDetails=[];
  categoryName: string;

  bgcolor = "white";
  color = "#f75d34";
  useraccount_id = 2;
  getName: String;
  headingtext: boolean = true;
  product_detail: any;
  
  options = [
    { name: "sunday", value: 'sunDay' },
    { name: "monday", value: 'monday' },
    { name: "tuesday", value: 'tuesday' },
    { name: "wednesday", value: 'wednesday' },
    { name: "thursday", value: 'thursday' },
    { name: "friday", value: 'friday' },
    { name: "saturday", value: 'saturday' }

  ]
  available:boolean;
  constructor(private route: ActivatedRoute, private router: Router
  ) {
    this.product_detail = this.router.getCurrentNavigation().extras.state;
    // console.log("product detail is" + JSON.stringify(this.product_detail));

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.categoryName = params.get('category');

    })
    data.painters.forEach(element => {

    })
    this.setCurrentDetails();
    this.categoryarray1 = data.painters;
    this.categoryarray2 = data.electrician;
    this.categoryarray3 = data.plumber;
  }

  sendTodata(product) {
    let myproduct = JSON.stringify(product);
    //let navigationExtras:NavigationExtras={queryParams:product}

    //.log("HIIIIIIII"+navigationExtras)
    this.router.navigateByUrl('similar_data_list', { state: product })
    //this.router.navigate(['similar_data_list'],{state:product});
  }
  isAvailable(id:any)
  {
    for(let i=0;i<this.currentProductDetails.length;i++)
    {
      let obj= this.currentProductDetails[i];
      let availablei= obj.availability;
      console.log("Availaibitiy We get  "+availablei);
      if(availablei=='Yes')
      {
        this.available= true;
      }


      
      else{
        this.available= false;
      }
    

    }

  }
  getSimilarProductDetail(id:any,categoryName:any)
  {
    console.log("get id and  CategoryName {} "+id + " "+categoryName);
    this.currentProductDetails=data2.similarProductDetails;
    for(let i=0;i<this.currentProductDetails.length;i++)
    {
      let obj= this.currentProductDetails[i];
    

    }


  }
  setCurrentDetails() {
    data2.productDetails.forEach(element=>{

    })
    this.currentProductDetails=data2.productDetails;
    for(let i=0;i<this.currentProductDetails.length;i++)
    {
      let obj= this.currentProductDetails[i];
    

    }
    //JSON.parse(data2.productDetails);
   // console.log("Get Product Details "+empObj);
    

   
  }

  //  firstImage()
  //  {
  //    console.log("first called");
  //    console.log("path:"+this.smallImge1.nativeElement.src);
  //    this.bigimg.nativeElement.src=this.smallImge1.nativeElement.src;

  //  }

  //  secondImage()
  //  {
  //   console.log("second called");
  //   console.log("path:"+this.smallImge2.nativeElement.src);
  //  this.bigimg.nativeElement.src=this.smallImge2.nativeElement.src;

  //  }
  //  thirdImage()
  //  {
  //   console.log("third called");
  //   console.log("path:"+this.smallImge3.nativeElement.src);
  //   this.bigimg.nativeElement.src=this.smallImge3.nativeElement.src;


  //  }
  //  fourthImage()
  //  {
  //   console.log("fourth called");
  //   console.log("path:"+this.smallImge4.nativeElement.src);
  //   this.bigimg.nativeElement.src=this.smallImge4.nativeElement.src;


  //  }


}
