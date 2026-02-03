import React from 'react';
import { json } from 'react-router-dom';
import Login from '../pages/login';

function Header(){

	let adminname=JSON.parse(localStorage.getItem("admin"));
	function logout()
	{
	
	localStorage.clear();
	window.location="/";
	
	}

return(
 <>
 
 <div class="page-container">	
   <div class="left-content">
	   <div class="mother-grid-inner">
         
				<div class="header-main">
					<div class="header-left">
							
							<div class="profile_img">	
 	<span class="prfil-img"><img src="./adm/images/user 1.png" alt=""/> </span> 
					
					
					
					<div class="user-name">
						<p>{adminname.name}</p>
						<span>Administrator</span>
					</div>
												
				<div class="clearfix"></div>	
			</div>	
							<div class="search-box">
                                <div>
								
										<input type="text" placeholder="Search..." required=""/>	
										<input type="submit" value=""/>					
								
								</div>
							<div class="clearfix"> </div>
						 </div>
                    </div>
						 <div class="header-right">	

						 { localStorage.getItem("admin")!=null?
                            <>

							<div class="profile_details">		
								<ul>
                               
									<li class="dropdown profile_details_drop">
										
												
										
									</li>
								</ul>
							</div>
							<div class="logout-side">
								
							     <p>  &nbsp; &nbsp; &nbsp; <i class="fa fa-solid fa-right-from-bracket"></i></p>
							<span><a href="#" onClick={logout}>Logout</a></span>
							
							</div>
							<div class="clearfix"> </div>

							</>
						:
						<>
						<Login/>
						</>

}
						</div>
				     <div class="clearfix"> </div>	
				</div>
         </div>
 </div>
 </div> 
 </>



)

}
export default Header ;