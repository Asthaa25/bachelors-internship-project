import React from "react";
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { json } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Wishlist(){

   

	const[wish,setwish]=useState([]);
    //alert(uemail);
    
        useEffect(()=>{
            let user=JSON.parse(localStorage.getItem('Login'));
    var uemail=user.email;
    
            Axios.get('http://localhost:1337/api/addproducttowishlist',	{params: {
                uemail:uemail,
            }}).then((response)=>{
            //console.log(response.data);
            setwish(response.data);
    
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
               if(response.data.message=="")
               {
               window.location="/addtocart"
               }
           else{
           //console.log=(response);
    
           alert(response.data.message);
           window.location = "/wishlist";
           } 
           });
    
            }
    
        };

   function wishlistremove(wishlistid){

        //alert(wishlistid);
            
                Axios.post('http://localhost:1337/api/remove',
                {wishlistid:wishlistid }).then((response)=>{
                    if(response.data.message)
                    {
                    alert(response.data.message);
                    window.location="/wishlist";
                    }
                
                        });
            }

return(

<>

<div class="content">
<br/><br/>
				<div class="container">
				
				<div class="col-md-12">
				
					 <h1> My Wishlist</h1>
						<br/><br/>

						{ wish.map((val)=>{
                             return( 
							<>
                            <div class="wishlistborder">
                        <div class="col-md-4" >
                            <br/>  <br/>
						<div class="cart-header">
                        <div class="close1"  onClick={()=>wishlistremove(val.wishlist_id)}><i class="fa fa-solid fa-x"></i> </div>
						 <div class="cart-sec simpleCart_shelfItem">
								<div class="cart-item cyc">
									 <img src={"http://localhost:1337/public/"+val.P_images} height="150" width="300"></img> 
								</div>
								<div class="cart-item-info">
                              

								<h3>  <Link to='/singlepropage' state={{single:val.Pr_id}} > {val.P_name}  </Link><span>Rs.  {val.P_price}</span></h3>
								<ul class="qty">
									<li><h4>{val.P_description}</h4></li>
                                  </ul>
                                  <br/>
                                  <ul  class="qty">
                                   <li><h4> Available Stock: {val.P_stock}    </h4></li> 
								</ul>
                                
								<br/>
								
									 <div class="delivery">
									
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
			</>
                )
           })
        }
		</div>

         </div>

   
</div>
				
<br/><br/>			
</>


);
} 
export default  Wishlist;

