import React from "react";
import Axios from "axios";
import {useEffect, useState} from "react";


function Dashboard(){

const[disuser,setdisuser]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/countuser')	
	.then((response)=>{
console.log(response.data);
setdisuser(response.data);
});
},[]);


const[disorder,setdisorder]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/countorder')	
	.then((response)=>{
console.log(response.data);
setdisorder(response.data);
});
},[]);



const[disproduct,setdisproduct]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/countproduct')	
	.then((response)=>{
console.log(response.data);
setdisproduct(response.data);
});
},[]);


return(

<>
<div class="page-container">	
   <div class="left-content">
	   <div class="mother-grid-inner"></div>
<br/>

	 <div class="market-updates">
			<div class="col-md-4 market-update-gd">
				<div class="market-update-block clr-block-1">
					<div class="col-md-8 market-update-left">
					{ disuser.map((val)=>{
                             return( 
							<>
					    <h3>{val.total}</h3>
						</>
							 )}
					)}
						<h4>Registered User</h4>
						
					
					</div>
					<div class="col-md-4 market-update-right">
						<i class="fa fa-file-text-o"> </i>
					</div>
				  <div class="clearfix"> </div>
				</div>
			</div>
			<div class="col-md-4 market-update-gd">
				<div class="market-update-block clr-block-2">
				 <div class="col-md-8 market-update-left">
				 { disorder.map((val)=>{
                             return( 
							<>
					    <h3>{val.total1}</h3>
						</>
							 )}
					)}
					<h4>Total Order Placed</h4>
					
				  </div>
					<div class="col-md-4 market-update-right">
					<i class="fa fa-shopping-bag" ></i>
					</div>
				  <div class="clearfix"> </div>
				</div>
			</div>
			<div class="col-md-4 market-update-gd">
				<div class="market-update-block clr-block-3">
					<div class="col-md-8 market-update-left">
					{ disproduct.map((val)=>{
                             return( 
							<>
					    <h3>{val.total2}</h3>
						</>
							 )}
					)}
						<h4>Total Products </h4>
						
					</div>
					<div class="col-md-4 market-update-right">
					<i class="fa-brands fa-product-hunt"></i>
					</div>
				  <div class="clearfix"> </div>
				</div>
			</div>
		   <div class="clearfix"> </div>
		</div>

<div class="chit-chat-layer1">
	<div class="col-md-6 chit-chat-layer1-left">
               <div class="work-progres">
                            <div class="chit-chat-heading">
                                  Recent Followers
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Project</th>
                                      <th>Manager</th>                                   
                                                                        
                                      <th>Status</th>
                                      <th>Progress</th>
                                  </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Face book</td>
                                  <td>Malorum</td>                                 
                                                             
                                  <td><span class="label label-danger">in progress</span></td>
                                  <td><span class="badge badge-info">50%</span></td>
                              </tr>
                              <tr>
                                  <td>2</td>
                                  <td>Twitter</td>
                                  <td>Evan</td>                               
                                                                  
                                  <td><span class="label label-success">completed</span></td>
                                  <td><span class="badge badge-success">100%</span></td>
                              </tr>
                              <tr>
                                  <td>3</td>
                                  <td>Google</td>
                                  <td>John</td>                                
                                  
                                  <td><span class="label label-warning">in progress</span></td>
                                  <td><span class="badge badge-warning">75%</span></td>
                              </tr>
                              <tr>
                                  <td>4</td>
                                  <td>LinkedIn</td>
                                  <td>Danial</td>                                 
                                                             
                                  <td><span class="label label-info">in progress</span></td>
                                  <td><span class="badge badge-info">65%</span></td>
                              </tr>
                              <tr>
                                  <td>5</td>
                                  <td>Tumblr</td>
                                  <td>David</td>                                
                                                                 
                                  <td><span class="label label-warning">in progress</span></td>
                                  <td><span class="badge badge-danger">95%</span></td>
                              </tr>
                              <tr>
                                  <td>6</td>
                                  <td>Tesla</td>
                                  <td>Mickey</td>                                  
                                                             
                                  <td><span class="label label-info">in progress</span></td>
                                  <td><span class="badge badge-success">95%</span></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
             </div>
      </div>
      



<div class="climate">
	<div class="col-md-6 climate-grids">
		<div class="climate-grid1">
			<div class="climate-gd1-top">
				<div class="col-md-6 climate-gd1top-left">
					<h4>Aprill 6-wed</h4>
					<h3>12:30<span class="timein-pms">PM</span></h3>				
					<p>Humidity:</p>					
					<p>Sunset:</p>
					<p>Sunrise:</p>
				</div>
				<div class="col-md-6 climate-gd1top-right">
					  <span class="clime-icon"> 
					  	<figure class="icons">
								<canvas id="partly-cloudy-day" width="64" height="64">
								</canvas>
							</figure>
											  
				   </span>					
					  <p>88%</p>					
					  <p>5:40PM</p>
					   <p>6:30AM</p>
				</div>
		    </div>
        </div>
		<br/><br/><br/>
	</div>
	
</div>

</div>

</div>
</div>

</>

)


} 

export default Dashboard;