import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation } from "react-router-dom";

function Singleproductpage() {


	
        const[singlepro,setsinglepro]=useState([]);

        
        const location =useLocation();
        const prodis =location.state.single;
     // alert(prodis);
        useEffect(() => {
     
          Axios.get('http://localhost:1337/api/singlepro1', 
          {params: {
            name:prodis,
          }}).then((response)=>{
                console.log(response.data);
                setsinglepro(response.data);
                });
              },[]);







              const  onpostpro=(id)=>{
		
	

                if(localStorage.getItem("Login")===null)
                {
                  alert("Please Login to your account....");
                  window.location="/log";
                }
                    else{
                
                  let user=JSON.parse(localStorage.getItem("Login"));
                  var uemail=user.email;
                  Axios.post('http://localhost:1337/api/cartItems',
                  {uemail:uemail,id:id}).then((response)=>{
                   if(response.data.message==="")
                   {
                  
                   window.location="/addtocart"
                   }
                 else{
                 //console.log=(response);
            
                 alert(response.data.message);
                 window.location = "/singlepropage";
                 } 
                 });
            
                }
            
              };
            
            
                const  onwishlistpro=(id)=>{
                  
                  if(localStorage.getItem("Login")===null)
                  {
                    alert("Please Login to your account....");
                    window.location="/log";
                  }
                  else{
                  
                    let user=JSON.parse(localStorage.getItem("Login"));
                    var uemail=user.email;
                    Axios.post('http://localhost:1337/api/wishlistItems',
                    {uemail:uemail,id:id}).then((response)=>{
                     if(response.data.message==="")
                     {
                    
                     window.location="/"
                     }
                   else{
                   //console.log=(response);
              
                   alert(response.data.message);
                   window.location = "/singlepropage";
                   } 
                   });
              
                  
                }
                  
              };

              


  return (
    <>
    
    
<div class="content">
<br/><br/>
				<div class="container">
				
				<div class="col-md-12">
				

						{ singlepro.map((val)=>{
                             return( 
							<>
                            <div class="wishlistborder">
                       
                            <br/>  <br/>
						<div class="cart-header">
            <div class="col-md-12"> 
						 <div class="cart-sec simpleCart_shelfItem">
              
								<div class="cart-item11 cyc">
                <div class=" col-md-6" >
									 <img src={"http://localhost:1337/public/"+val.P_images} height="200" width="300" ></img> 
								</div>
                </div>
								<div class="cart-item11-info">
                <div class=" col-md-6" >
								<h2> {val.P_name}  </h2>
                <br/>
               <h3>  Rs.  {val.P_price}</h3>
               <br/>
								<ul class="qty">
									<li><h3> Description : {val.P_description}</h3></li>
                  </ul>
                  <br/>
                  <ul  class="qty">
                    <li><h3> Available Stock: {val.P_stock}    </h3></li> 
								</ul>
                                
								<br/>
                
             <br/>
									 <div class="delivery123">

                   <button type="button" class="btn btn-danger" onClick={()=>onwishlistpro(val.Pr_id)} >Wishlist  &nbsp; &nbsp;<i class="fa fa-regular fa-heart"></i></button>
                   &nbsp;&nbsp;
                   <button type="button" class="btn btn-warning"  onClick={()=>onpostpro(val.Pr_id)}  >Add To Cart  &nbsp; &nbsp;<i class="fa fa-solid fa-bag-shopping"></i></button>
                                     
									 <div class="clearfix"></div>
								</div>	
								<br/>
							
							   </div>
							   <div class="clearfix"></div>
									</div>				
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
				
<br/><br/>			
    
  </>
  )
}

export default Singleproductpage;