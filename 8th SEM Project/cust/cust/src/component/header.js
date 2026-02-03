import React ,{useRef, useState,useEffect} from 'react';
import { json } from 'react-router-dom';
import {Link} from 'react-router-dom';
import  Axios  from 'axios';

function Header(){
	useEffect(() => {
		var id="example1";
		window.call(id);
				
			
		},[]);




	const layoutRef =useRef(null);
	const layoutRef1 =useRef(null);
	const layoutRef2 =useRef(null);
	const layoutRef3 =useRef(null);

let user=JSON.parse(localStorage.getItem("Login"));
function logout()
{

localStorage.clear();
window.location="/";

}

const handlemenu=(ref)=>{
	if(ref?.current?.className.includes('dropdown'))
	{

		ref.current.className='open';

	}
	else{

		ref.current.className='dropdown';
	}


	}


const handlemenu1=(ref)=>{
	if(ref?.current?.className.includes('dropdown'))
	{
	
		ref.current.className='open';
	
	}
	else{
	
		ref.current.className='dropdown';
	}
	
	
	}

const handlemenu2=(ref)=>{
		if(ref?.current?.className.includes('dropdown'))
		{
		
			ref.current.className='open';
		
		}
		else{
		
			ref.current.className='dropdown';
		}
		
		
		}

const handlemenu3=(ref)=>{
	if(ref?.current?.className.includes('dropdown'))
	{
				
		ref.current.className='open';
				
		}
	else{
				
		ref.current.className='dropdown';
		}
	
				
		}
		


return(
<>

<div class="header-top">
				<div class="container">
					 <div class="top-left">
						<b><a href="#"> Help  <i class="glyphicon glyphicon-phone" aria-hidden="true"></i> (+91) 8140231918</a>&nbsp;<font size="4"color="white"> | </font> &nbsp;<a href="/contact">Contact Us</a></b>
					</div>
					<div class="top-right">
					<ul>
{ localStorage.getItem("Login")!=null?
<>
						
						<li style={{fontSize:'21px', marginRight: '-8%'}}><font color="white" ><b>{user.name}</b></font></li>&nbsp;&nbsp;&nbsp;
						<li class="setting" >  <div class="dropdown">
						<button type="button" class="dropbtn"><i class="fa-solid fa-bars"></i></button>
						<ul class="dropdown-content">
						
							<a href="/editprofile"><i  class="fa-regular fa-pen-to-square"></i>&nbsp;&nbsp;Edit Profile</a>
							<a href="/myorder"><i class="fa-sharp fa-solid fa-box"></i>&nbsp;&nbsp;My Orders</a>
							
						
							<a href="#" onClick={logout} align="center"><font color="red">LOGOUT</font></a>
							</ul>
						</div>

				
					</li>
						</>
						:
						<>

						<li style={{fontSize:'17px', marginRight: '-8%',  marginLeft: '-10%'}}><a href="/log"><b>Login</b></a></li>
						<li  style={{fontSize:'17px', marginRight: '-8%',marginLeft: '7%'}}><a href="/create"><b> Create Account </b></a></li>
						</>

}
					</ul>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="heder-bottom">
				<div class="container">
					<div class="logo-nav">
						<div class="logo-nav-left">
							<h1><a href="/home">Lavishly <span> Leathers </span></a></h1>
						</div>
						<div class="logo-nav-left1">
							<nav class="navbar navbar-default">
						
							<div class="navbar-header nav_2">
								<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div> 
							<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul class="nav navbar-nav">
									<li class="active"><a href="/home" class="act">Home</a></li>	
							
									<li className="dropdown" onClick={()=> handlemenu(layoutRef)} ref={layoutRef}>
										<a href="#" >Women<b class="caret"></b></a>
										<ul class="dropdown-menu multi-column columns-3">
											<div class="row">
												<div class="col-sm-3  multi-gd-img">
													<ul class="multi-column-dropdown">
														<li ><Link to='/women' state={{name:"All"}}><font color="black" size="3">All</font></Link></li>
														<li><Link to='/women' state={{name:"Women Jackets"}}><font color="black"  size="3">Jackets</font></Link></li>
														<li ><Link to='/women' state={{name:"Women Shoes"}}><font color="black" size="3">Shoes</font></Link></li>
														<li><Link to='/women' state={{name:"Women Watches"}}><font color="black" size="3">Watches</font></Link></li>
														<li><Link to='/women' state={{name:"Women Belts"}}><font color="black"  size="3">Belts</font></Link></li>
														<li><Link to='/women' state={{name:"Clutches"}}><font color="black" size="3">Clutches</font></Link></li>
														<li><Link to='/women' state={{name:"Women Wallets"}}><font color="black" size="3">Wallets</font></Link></li>
													    <li><Link to='/women' state={{name:"Hangbags"}}><font color="black" size="3">Hangbags</font></Link></li>
														<li><Link to='/women' state={{name:"Laptop Bags"}}><font color="black" size="3">Laptop Bags</font></Link></li>
																									
													</ul>
												</div>
												<div class="col-sm-3  multi-gd-img">
														<a href="products.html"><img src="./res/images/woo.jpg"    height="250" width="470"  alt=" "/></a>
												</div> 
												<div class="col-sm-3  multi-gd-img">
														<a href="products.html"><img src="./res/images/woo1.jpg"    height="250" width="470"  alt=" "/></a>
												</div>
												<div class="clearfix"></div>
											</div>
										</ul>
									</li>
									<li className="dropdown" onClick={()=> handlemenu1(layoutRef1)} ref={layoutRef1}>
										<a href="#" > Men <b class="caret"></b></a>
										<ul class="dropdown-menu multi-column columns-3">
											<div class="row">
												<div class="col-sm-3  multi-gd-img">
													<ul class="multi-column-dropdown">
														<li><Link to='/men' state={{name:"All"}}><font color="black" size="3">All</font></Link></li>
														<li><Link to='/men' state={{name:"Men Jackets"}}><font color="black" size="3">Jackets</font></Link></li>
														<li><Link to='/men' state={{name:"Men Wallets"}}><font color="black" size="3">Wallets</font></Link></li>
														<li><Link to='/men' state={{name:"Men Shoes"}}><font color="black" size="3">Shoes</font></Link></li>
														<li><Link to='/men' state={{name:"Men Watches"}}><font color="black" size="3">Watches</font></Link></li>
														<li><Link to='/men' state={{name:"Men Belts"}}><font color="black" size="3">Belts</font></Link></li>		
														<li><Link to='/men' state={{name:"Laptop Bags"}}><font color="black" size="3">Laptop Bags</font></Link></li>												
													</ul>
												</div>
												<div class="col-sm-3  multi-gd-img">
													<img src="./res/images/woo3.jpg"   height="250" width="800" alt=" "/>
												</div> 
												<div class="col-sm-3  multi-gd-img">
														<img src="./res/images/woo4.jpg" height="250" width="800" alt=" "/>
												</div>
												<div class="clearfix"></div>
											</div>
										</ul>
									</li>
									<li className="dropdown" onClick={()=> handlemenu2(layoutRef2)} ref={layoutRef2}>
										<a href="#" >Luggage<b class="caret"></b></a>
										<ul class="dropdown-menu multi-column columns-3">
											<div class="row">
												<div class="col-sm-3  multi-gd-img">
													<ul class="multi-column-dropdown">
														<li><Link to='/luggage' state={{name:"Luggage bags"}}><font color="black" size="3">All Luggage Bags</font></Link></li>
																											
													</ul>
												</div>
												<div class="col-sm-3  multi-gd-img">
														<img src="./res/images/leluggage1.jpg"  height="100" width="200"   alt=" "/>
												</div> 
												<div class="col-sm-3  multi-gd-img">
														<img src="./res/images/le luggage.jpg"  height="100" width="1000"   alt=" "/>
												</div> 
												</div>
										</ul>
									</li>
									<li className="dropdown" onClick={()=> handlemenu3(layoutRef3)} ref={layoutRef3}>
										<a href="#" >Gift Combos<b class="caret"></b></a>
										<ul class="dropdown-menu multi-column columns-3">
											<div class="row">
												<div class="col-sm-3  multi-gd-img">
													<ul class="multi-column-dropdown">
													<li><Link to='/giftcombo' state={{name:"All"}}><font color="black" size="3">All </font></Link></li>
														<li><Link to='/giftcombo' state={{name:"Men Gift combos"}}><font color="black" size="3">For Men</font></Link></li>
														<li><Link to='/giftcombo' state={{name:"Women Gift combos"}}><font color="black" size="3">For Women</font></Link></li>														
													</ul>
												</div>
												<div class="col-sm-3  multi-gd-img">
														<a href="products1.html"><img src="./res/images/gift combo 1.jpg"    height="200" width="200" alt=" "/></a>
												</div> 
												<div class="col-sm-3  multi-gd-img">
														<a href="products1.html"><img src="./res/images/gift combo 2.jpg"   height="150" width="600" alt=" "/></a>
												</div>
												<div class="clearfix"></div>
											</div>
										</ul>
									</li>
								</ul>
							</div>
							</nav>
						</div>
					
						<div class="header-right2">

						<div  class="cart box_2" >
								<h3 align="center"> 
										<i class="fa fa-regular fa-heart"></i>
									</h3>
									<p><a href="/wishlist" class="simpleCart_empty">Wishlist</a></p>
								<div class="clearfix"> </div>
						</div>
						&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;
							
							<div class="cart box_1">
								
									<h3 align="center"> <div class="total">
										</div>
										<i class="fa fa-solid fa-bag-shopping"></i>
									</h3>
								
								<p><a href="/addtocart" class="simpleCart_empty">View Cart</a></p>
								<div class="clearfix"> </div>
								
								
							</div>	
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
			</div>
		

</>

);


}

export default Header;