import React from "react";
import Axios from "axios";
import{ useState,useEffect} from "react";


function Regiscustomer(){

  
    const[displaycust,setdisplaycust]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1337/api/displaycust').then((response)=>{
        //console.log(response.data);
        setdisplaycust(response.data);
    
        });
    
    },[]);



    return(

 <>

<div class="page-container">	
   <div class="left-content">
	   <div class="mother-grid-inner"></div>
<br/>

<div class="product-block">
    	<div class="pro-head">
    		<h2 align="left"> Registered Users</h2> 
    	</div>


       
        <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                    
                  <table class="table table-striped table-bordered t3-table-all" >
                      <thead >
                                              
    
                        <tr>
                          <th>User_ID</th>
                          <th>User_Name</th>
                          <th>User_Email</th>
                          <th>User_Address</th>
                          <th>User_Mobile_No</th>
                        </tr>
                       
                      </thead>
                      <tbody >
{displaycust.map((val)=>{
                return(
                  <>    
	 
                    <tr >
                          <td>{val.user_id}</td>
                          <td>{val.user_fullname}</td>
                          <td>{val.user_email}</td>
                          <td>{val.user_address}</td>
                          <td>{val.user_mobileno}</td>
                    </tr>
                    
                    </>
  
  )
 })
 
}
                         
                      </tbody>
                    </table>
                    
                    <br/>
                  </div>
                </div>
                <br/><br/><br/><br/>
              </div>
          </div>
          </div>
          </div>
          </>

)
}
export default Regiscustomer;