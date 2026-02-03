import React from 'react';


function Sidebar(){

	let adminname=JSON.parse(localStorage.getItem("admin"));

return(

 <>
 
 <div class="sidebar-menu">
 <div class="logo-name">
		 <a href="/dashboard"> <h1>Admin</h1> 
									
								  </a> 								
							</div>	  
		    <div class="menu">
		      <ul id="menu" >
		        <li id="menu-home" ><a href="/dashboard"><i class="fa fa-tachometer"></i><span>Dashboard</span></a></li>
		       
                <li><a href="/regiscustomer"><i class="fa fa-solid fa-user"></i> <span>Customers</span></a></li>
		        
		        <li><a href="/order"><i class="fa fa-solid fa-box"></i><span>Orders</span></a>
		        	 
		        </li>
		        
		         <li><a href="#"><i class="fa fa-shopping-cart"></i><span>Products</span></a>
		         <ul>
		            <li><a href="/product">All</a></li>
		            <li><a href="/createproduct"><font size="4"> +  </font>  Create New</a></li>		            
		          </ul>
		         </li>


				 <li><a href="#"><i class="fa fa-cog"></i><span>Settings</span></a>
		         	 <ul id="menu-academico-sub" >
			            
			            <li id="menu-academico-boletim" ><a href="/admeditpro">Edit Profile</a></li>
		             </ul>
		         </li>
						
                 
		      </ul>
		    </div>
	 </div>
	<div class="clearfix"> </div>

 
 </>



)

}
export default Sidebar;