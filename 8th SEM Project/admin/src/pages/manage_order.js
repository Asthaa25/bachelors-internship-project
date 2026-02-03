import React from "react";
import Axios from "axios";
import{ useState,useEffect} from "react";


function Order(){

  const[displayorder,setdisplayorder]=useState([]);
  useEffect(()=>{
      Axios.get('http://localhost:1337/api/displayorders').then((response)=>{
      //console.log(response.data);
      setdisplayorder(response.data);
  
      });
  
  },[]);





function changestatus(orderid){


  Axios.post('http://localhost:1337/api/changestatus',
  {orderid:orderid }).then((response)=>{
    if(response.data.message)
    {
    //alert(response.data.message);
    window.location="/order";
    }
  
      });
}




    return(

 <>

<div class="page-container">	
   <div class="left-content">
	   <div class="mother-grid-inner"></div>
<br/>

<div class="product-block">
    	<div class="pro-head">
    		<h2 align="left"> Manage Orders</h2> 
    	</div>


       
        <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                    
                  <table class="table table-striped table-bordered t3-table-all" >
                      <thead>
                        
                        <tr>
                          <th>Order_ID</th>
                          <th>Order_Final_ID</th>
                          <th>Product_ID</th>
                          <th>User_Email</th>
                          
                          <th>Order_Status</th>
                          <th>Order_Quantity</th>
                          <th>Order_Date</th>
              
                          <th>Payment Status</th>
                        </tr>
                       
                      </thead>
                      <tbody>
                        
	{displayorder.map((val)=>{
                return(
                  <>   
                      <tr>
                          <td>{val.order_id} </td>
                          <td>{val.finaloid} </td>
                          <td>	{val.Pr_id}</td>
                          <td>	{val.user_id}</td>
                        
                          <td>	<button type="button" class="btn button-info" onClick={()=>changestatus(val.order_id)} >{val.order_status}</button></td>
                          <td>	{val.order_quantity}</td>
                          <td>	{new Date(val.order_date).toLocaleDateString()}  </td>
                          <td>	<button type="button" class="btn button-info" >Paid</button></td>

                        </tr>
                        </>
  
                           )
                          })
                          
                         }
                      </tbody>
                    </table>
                  </div>
                </div>
                <br/><br/><br/><br/><br/>
              </div>
             
          </div>
          
          </div>
         
          </div>
        
          </>

)
}
export default Order;