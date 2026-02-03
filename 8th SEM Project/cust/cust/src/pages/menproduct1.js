import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import { error } from "jquery";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { json } from 'react-router-dom';

function Menproduct1(){
	
	const[view1,setview1] = useState([])
{/*}
	useEffect(()=>{
        Axios.get('http://localhost:1337/api/viewproduct').then((response)=>{
        console.log(response.data);
        setview(response.data);
        })
			
		.catch(err =>{

			console.log(err)
		}
)
    },[]);
*/}

const location =useLocation();
const procat1 =location.state.name;
//console.log(jackets);
//alert(procat1)


useEffect(() => {
	//console.log(jackets);
	Axios.get('http://localhost:1337/api/viewproduct1', 
	{params: {
		name:procat1,
	}}).then((response)=>{
        console.log(response.data);
        setview1(response.data);
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
	   window.location = "/men";
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
			   if(response.data.message=="")
			   {
			  
			   window.location="/wishlist"
			   }
		   else{
		   //console.log=(response);
	
		   alert(response.data.message);
		   window.location = "/men";
		   } 
		   });
	
			
		}
			
	};


	function search(){

		var search=document.getElementById("search").value;
		
				Axios.get('http://localhost:1337/api/searchpro',
				{ params:{search:search}}).then((response)=>{  
		   if(response.data.message)
		   {
		   alert(response.data.message);
		  
		   }
		else{
	
		setview1(response.data);
		}
		});
		
		}		








return(

<>

<div class="banner1">
			<div class="container">
				<h3><a href="/home">Home</a> / <span>Products</span></h3>
			</div>
		</div>
	
			<div class="content">
				<div class="products-agileinfo">
					
					<div class="container">
						<div class="product-agileinfo-grids w3l">
							<div class="col-md-3 product-agileinfo-grid">
								<div class="categories">
									<h3>Categories</h3>
									<ul class="tree-list-pad">
										
														<li><Link  state={{name:"All"}}><font  size="4">All</font></Link></li>
														<li><Link  state={{name:"Jackets"}}><font  size="4">Jackets</font></Link></li>
														<li><Link  state={{name:"Shoes"}}><font  size="4">Shoes</font></Link></li>
														<li><a href="products.html"><font  size="4">Watches</font></a></li>
														<li><a href="products.html"><font  size="4">Belts</font></a></li>
														<li><a href="products.html"><font  size="4">Clutches</font></a></li>
														<li><a href="products.html"><font  size="4">Wallets</font></a></li>
														<li><a href="products.html"><font  size="4">Hangbags</font></a></li>
														<li><a href="products.html"><font  size="4">Laptop Bags</font></a></li>
										
									</ul>
								</div>
							
								
								
								<div class="cat-img">
									<img class="img-responsive " src="./res/images/45.jpg" alt=""/>
								</div>
							</div>
							<div class="col-md-9 product-agileinfon-grid1 w3l">
								
							<div class="mens-toolbar">
									<table align="center">
									
									<p>
									 
                                <input type="text"  id="search" class="search_bar" maxLength={50} placeholder="Search for products . . . . .  "/>
                       </p>
					   <p>
						         <button type="button" class="btn btn-primary" onClick={search}>
                                 Search
                                  </button>
								
									</p> 
							  </table>
								
									<div class="clearfix"></div>		
								</div>
								<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
									<ul id="myTab" class="nav1 nav1-tabs left-tab" role="tablist">
										<ul id="myTab" class="nav nav-tabs left-tab" role="tablist">
									
									</ul>
                                    </ul>
									<div id="myTabContent" class="tab-content">
										<div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
											<div class="product-tab">
										
											
                                            
												{view1.map((val)=>{
                                                return( 

													<>
												<div class="col-md-4 product-tab-grid simpleCart_shelfItem">
													<div class="grid-arr">
														<div  class="grid-arrival">
															<figure>		
																
															 
														<img src={"http://localhost:1337/public/"+val.P_images}  height="200" width="200" class="image-size"></img>
																	
														
															</figure>

															<div class="block">
															<div class="starbox small ghosting"> </div>
														</div>
														<div class="women">
															<Link to='/singlepropage' state={{single:val.Pr_id}} ><h6> {val.P_name} </h6></Link>
															<p  ><em class="item_price">Price : Rs. {val.P_price}   </em></p>
															<span class="size"> Description: {val.P_description}</span>
															<span class="size"> Category: {val.P_category}</span>
															<span class="size"> Available 
															Stock: {val.P_stock}    </span>
															
															
															<button type="submit"  onClick={()=>onwishlistpro(val.Pr_id)} class="my-cart-b item_add"><i class="fa fa-regular fa-heart"></i>&nbsp;&nbsp;Wishlist</button>
															&nbsp;	&nbsp;	
														     <button type="submit" onClick={()=>onpostpro(val.Pr_id)} class="my-cart-b item_add"><i class="fa fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;Add to Cart</button>
														</div>	
														</div>
														
													</div>
												</div>
												</>
														)
													})

													}
												
												<div class="clearfix"></div>
											</div>			
									
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					</div></div></div></div>
            </>

);


} 

export default Menproduct1;