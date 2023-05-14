
      
     
      var count=1;
        var prodpriece=234;
        var cartItem=0;
        var priece=prodpriece;
        var productimg = document.getElementById("productImg");
    //     var smallImg = document.getElementsByClassName("smallImgRow")[0];
    //     smallImg.getElementsByClassName("smallImg")[0].onclick = function () {
	// 	     console.log("function1 called");
    //         productImg.src = $('#small1').prop('src');
    //        }

    //     smallImg.getElementsByClassName("smallImg")[1].onclick = function () {
	// 			     console.log("function2 called");


    //         productImg.src =$('#small1').prop('src');
    //      }
    //     smallImg.getElementsByClassName("smallImg")[2].onclick = function () {
	// 					     console.log("function3 called");
    //         productImg.src = $('#small1').prop('src');
    //      }
    //     smallImg.getElementsByClassName("smallImg")[3].onclick = function () {
	// 	console.log("function4 called");
    //         productImg.src = $('#small1').prop('src');

    //   }
      
      document.getElementById("price").innerHTML='$'+priece;
      document.getElementById("increasePrice").value=count;
      document.getElementById("cart").value=cartItem;

     function addItem()
      {
          count++;
          //priece=count*priece;
          document.getElementById("increasePrice").value=count;
          calculateprice();
          
      }
      function calculateprice()
      {
       priece=count*prodpriece;
       document.getElementById("price").innerHTML='$'+priece;
      }
      function addcart()
      {
          cartItem++;
          alert("Item added to cart  "+cartItem);
          document.getElementById("cart").value=cartItem;

      }
     function removeItem()
      {
         if(count<=1)
         {
             return;
         }
        
         count--;
         calculateprice();
         document.getElementById("increasePrice").value=count;



      }

