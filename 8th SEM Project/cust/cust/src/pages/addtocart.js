import React from "react";
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { json } from 'react-router-dom';
import moment from 'moment';
import { Link } from "react-router-dom";

function Addtocart(){

	const[addcart,setaddcart]=useState([]);
	
//alert(uemail);

    useEffect(()=>{
		let user=JSON.parse(localStorage.getItem('Login'));
var uemail=user.email;

        Axios.get('http://localhost:1337/api/addproducttocart',	{params: {
			uemail:uemail,
		}}).then((response)=>{
        //console.log(response.data);
        setaddcart(response.data);

        });
    
    },[]);


	const calculateTotal = () => {
		let total = 0;
		addcart.map((val) => (total = total + val.Cart_quantity * val.P_price));
		return total;
	  };

	  

/*
const qty=(cartid,prodqty)=>{
	
var prodqty=parseInt(prodqty)+parseInt(1);

//alert(prodqty);
//alert(cartid);


Axios.post('http://localhost:1337/api/cartquantity',
{prodqty:prodqty,cartid:cartid }).then((response)=>{
	if(response.data.message)
	{
	alert(response.data.message);
	window.location="/addtocart";
	}

		});
		
}
*/
//----------------increase and decrease quantity of product---------------------------------------------

let [num, setNum]= useState(1);
let incNum =(qty,cartid)=>{
  var prodqty=parseInt(qty)+parseInt(1);
  //alert(prodqty);
  //alert(cartid);

//api call post
Axios.post('http://localhost:1337/api/cartquantity', 

{prodqty:prodqty,cartid:cartid}).then((response)=>{
if(response.data.message)

{

//alert(response.data.message);

window.location="/addtocart";

}

});


};
let decNum=(qty,cartid)=>{
	if(qty > 1 )
	{
	var prodqty=parseInt(qty)-parseInt(1);
	}
	else{
		var prodqty=parseInt(qty);
	}
	//alert(prodqty);
	//alert(cartid);

//api call post
Axios.post('http://localhost:1337/api/cartquantity', 
  
{prodqty:prodqty,cartid:cartid}).then((response)=>{
if(response.data.message)


{

  //alert(response.data.message);

  window.location="/addtocart";

}

});

}
let handleChange = (e)=>{
 setNum(e.target.value);
}

//---------------remove (product) from cart----------------------------------------------


function remove(cartid){

//alert(cartid);

	Axios.post('http://localhost:1337/api/removepro',
	{cartid:cartid }).then((response)=>{
		if(response.data.message)
		{
		alert(response.data.message);
		window.location="/addtocart";
		}
	
			});
}


//----------------saved for later (product)----------------------------------------------

const  saveforlater=(id)=>{
	
		let user=JSON.parse(localStorage.getItem("Login"));
		var uemail=user.email;

	  

		Axios.post('http://localhost:1337/api/savelater',
		{uemail:uemail,id:id}).then((response)=>{
	   if(response.data.message==="")
	   {
	  
	   window.location="/"
	   }
   else{
   //console.log=(response);

   alert(response.data.message);
   window.location = "/addtocart";
   } 
   });

}

//---------------- display product in saved for later ----------------------------------------------

const[savelater,setsavelater]=useState([]);
	
//alert(uemail);

    useEffect(()=>{
		let user=JSON.parse(localStorage.getItem('Login'));
var uemail=user.email;

        Axios.get('http://localhost:1337/api/saveproduct',	{params: {
			uemail:uemail,
		}}).then((response)=>{
        //console.log(response.data);
        setsavelater(response.data);

        });
    
    },[]);


//---------------- add product from saved for later to cart --------------------------------------------

	const  onpostpro=(id)=>{
		
		
		
			let user=JSON.parse(localStorage.getItem("Login"));
			var uemail=user.email;
			Axios.post('http://localhost:1337/api/addbacktocart',
			{uemail:uemail,id:id}).then((response)=>{
		   if(response.data.message=="")
		   {
		   window.location="/"
		   }
	   else{
	   //console.log=(response);

	   alert(response.data.message);
	   window.location = "/addtocart";
	   } 
	   });

		

	};

//---------------- remove product from saved for later  --------------------------------------------

	
	function savelaterremove(saveid){

        //alert(wishlistid);
          //  console.log(saveid);

                Axios.post('http://localhost:1337/api/savelaterremove',
                {saveid:saveid }).then((response)=>{
                    if(response.data.message)
                    {
                    alert(response.data.message);
                    window.location="/addtocart";
                    }
                
                        });
            }


//---------------- Paymnet code   --------------------------------------------	

		var Payment = () => {
			var merchant_order_id = "123";
			var amt=document.getElementById('amt').value;
			
//alert(amt);
	var options = {
		"key": "rzp_test_svDjV0nje7aVz8",
		"amount": amt * 100, // 2000 paise = INR 20
		"name": "Lavishly Leathers",
		"description": "Product Order",
	
		"currency" : "INR",
		"netbanking" : true,
		prefill: {
				name: "Akshar",
			   email: "aksmul501@gmail.com",
				contact: 9898989898,
	
			},
		 notes: {
				soolegal_order_id: merchant_order_id,
			},
		"handler": function (response){
	
			//window.location = "/Login" 
	
	
		alert("Successfull Payment !!");
		alert("Order is Placed Successfully !!")
		//api
		let user=JSON.parse(localStorage.getItem("Login"));
		var uemail=user.email;
		
		

		Axios.post('http://localhost:1337/api/productorder',
		{uemail:uemail}).then((response)=>{
	   if(response.data.message==="")
	   {
	  
			window.location="/"
			}
		else{
		//console.log=(response);

		//alert(response.data.message);
		window.location = "/addtocart";
		} 
		});


		},
	
		"theme": {
			"color": "#528FF0"
		}
	  };
	  
	  var rzp1 = new window.Razorpay(options);
	  rzp1.open();
	 
	
		}

return(

<>

<div class="content">
		<br/>
		
				<div class="container">
				<h1>My Shopping Bag </h1>
						<br/><br/>
		<div class="Newclass">
		  <div class="col-md-12">
		  <div class="new123">
				<div class="col-md-6">
				<br/>

						{addcart.map((val)=>{
                             return( 
							<>
						<div class="cart-header">
						 <div class="cart-sec simpleCart_shelfItem">
								<div class="cart-item cyc">
									 <img src={"http://localhost:1337/public/"+val.P_images  } height="150" width="300"></img> 
								</div>
								<div class="cart-item-info">
								<h3>  <Link to='/singlepropage' state={{single:val.Pr_id}} >{val.P_name}  </Link><span>Rs. {val.P_price} </span></h3>
								<ul class="qty">
									<li><p>{val.P_description}</p></li>
								</ul>
								<br/>
								<div>
								<h4>Quantity : </h4>
								
								
								<br/>
								 <div class="quantity-select">  
								 
                                    <div class="entry value-minus" onClick={()=>decNum(val.Cart_quantity,val.Cart_id)}>&nbsp;</div>
                                    <div class="entry value">  <input type="text" class="form-control" defaultValue={val.Cart_quantity} onChange={handleChange} style={{width:"40px"}}/></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div class="entry value-plus active"  onClick={()=>incNum(val.Cart_quantity,val.Cart_id)}>&nbsp;</div>
                                </div>
								</div>

									 <div class="delivery">
									
                                     <button type="button" class="btn btn-danger" onClick={()=>remove(val.Cart_id)}>Remove &nbsp; &nbsp;<i class="fa fa-regular fa-trash"></i></button>
                                     &nbsp; &nbsp;
									 <button type="button" class="btn btn-warning" onClick={()=>saveforlater(val.Pr_id)} >Save for later &nbsp; &nbsp;<i class="fa-regular fa-bookmark"></i></button>
									
									 <div class="clearfix"></div>
								</div>	
								<br/><br/><br/><br/>
								<div>
								<h5> <i class="fa-solid fa-rotate-left"></i>&nbsp; &nbsp;
							    <b>14 days</b> return available</h5>
								</div>
							   </div>
							   <div class="clearfix"></div>
													
						  </div>
					 </div>
					 </>
							)
					   })

					}
</div>
</div>
					
				<div class="col-md-6">   
				<br/> 
				
				 <div class="price_details">
		
            Price Details :
          </div>
		  <br/>
          <div class="card-body">
            <table >
				<tr>
					<th></th>
					<th></th>
				</tr>
				<tr   >
					<td>Total MRP</td> 
					<td>Rs. {calculateTotal()}</td>
				</tr>
				
				<tr  >
					<td>   Delivery Charges </td>
					<td><p><del>Rs. 99</del> <em class="item_price">FREE</em></p></td>
				</tr>
				<tr>
					<td>   <strong>TOTAL AMOUNT</strong>
                  </td>
					<td> <strong >Rs. {calculateTotal()} </strong></td>
					<input type="" value={calculateTotal()} id="amt" hidden/>
				</tr>
			
			</table>
			<br/>
			<div class="col-md-5">  
			<div class="place_order">
			<div class="continue_shopping">
				
			 <button type="button" class="btn btn-danger btn-lg btn-block" onClick={()=>Payment()}>
             PLACE  ORDER
            </button>
			
			</div>
			</div>
			
			</div>
			<div class="col-md-7">  
			<div class="continue_shopping">
			 <a href="/"> <button type="button" class="btn btn-danger btn-lg btn-block ">
			 <i class="fa fa-solid fa-arrow-left-long"></i>
			  &nbsp;&nbsp;&nbsp;
             CONTINUE &nbsp; SHOPPING
            </button>
			</a>
			</div>
			<br/><br/>
			</div>
          </div>

		 
		
        </div>
					
				</div>
				</div>

</div>
					 
				</div>
				

  
<br/>
<br/>
<div class="content">
		
				<div class="container">
				<div class="saveforlater">
				<div class="col-md-12">
				
				<div class="price_details">
					Saved for later :
				</div>
						<br/>

						{savelater.map((val)=>{
                             return( 
							<>
                            <div class="wishlistborder">
                        <div class="col-md-4" >
                            <br/>  <br/>
						<div class="cart-header">
                        <div class="close1"  onClick={()=>savelaterremove(val.save_id)} ><i class="fa fa-solid fa-x"></i> </div>
						 <div class="cart-sec simpleCart_shelfItem">
								<div class="cart-item cyc">
									 <img src={"http://localhost:1337/public/"+val.P_images} height="150" width="300"></img> 
								</div>
								<div class="cart-item-info">
								<h3><a href="#"> {val.P_name}  </a><span>Rs.  {val.P_price}</span></h3>
								<ul class="qty">
									<li><h4>{val.P_description}</h4></li>
                                  </ul>
                                  <br/>
                                  <ul  class="qty">
                                   <li><h4> Available Stock: {val.P_stock}    </h4></li> 
								</ul>
								<br/>
								<div class="delivery">
							
									 <button type="button" class="btn btn-danger" onClick={()=>onpostpro(val.Pr_id)} >Move to cart &nbsp; &nbsp;<i class="fa fa-solid fa-cart-shopping"></i></button>
									 </div>
							   </div>
							   <div class="clearfix"></div>
													
						  </div>
					 </div>
				</div>
				</div>
							</>
								)
						})

						}
									
				</div>

                </div>

					 </div>
					 </div>
				<br/><br/><br/>
				
			
</>


);
} 
export default  Addtocart;

