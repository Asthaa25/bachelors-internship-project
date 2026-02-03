import React from "react";
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { Link } from "react-router-dom";


function Myorder() {

  
	const[myorder,setmyorder]=useState([]);
  //alert(uemail);
  
      useEffect(()=>{
          let user=JSON.parse(localStorage.getItem('Login'));
  var uemail=user.email;
  
          Axios.get('http://localhost:1337/api/displaymyorder',	{params: {
              uemail:uemail,
          }}).then((response)=>{
          //console.log(response.data);
          setmyorder(response.data);
  
          });
      
      },[]);


      function deleteorder(orderid){

        //alert(wishlistid);
            
                Axios.post('http://localhost:1337/api/deleteorder',
                {orderid:orderid }).then((response)=>{
                    if(response.data.message)
                    {
                    alert(response.data.message);
                    window.location="/myorder";
                    }
                
                        });
            }


      const [visible, setVisible] = React.useState(false);      


  return (
   <>


<div class="content">
			<br/>
				<div class="container">
				<div class="col-md-12">
				<br/>
					 <h1 class="class"> My Orders :</h1>
          

<br/> <br/>

           <br/>
						</div>
            { myorder.map((val)=>{
                             return( 
							<>
            <div class="col-md-12">
            <div class="card shadow-0 border mb-4">
              <div class="new456">
              <div class="card-body">
                <div class="row">
                  <div class="orderimg col-md-2">
                    <img src={"http://localhost:1337/public/"+val.P_images} class="img-fluid" alt="Phone" height="100" width="200"/>
                  </div>
                  <div class=" ordername col-md-2 ">
                    <p class="text-muted mb-0" >{val.P_name}</p>
                  </div>
                  <div class=" ordername1 col-md-2 ">
                    <p class="text-muted mb-0 small">About Product: {val.P_description}</p>
                  </div>
                 
                  <div class=" ordername3 col-md-2 ">
                    <p class="text-muted mb-0 small">Qty: {val.order_quantity}</p>
                  </div>
                  <div class=" ordername4 col-md-2 ">
                    <p class="text-muted mb-0 small"> Price: Rs. {val.P_price}</p>
                  </div>
                  <div class=" ordername2 col-md-2 ">
                    <p class="text-muted mb-0 small"> Order date: 	{new Date(val.order_date).toLocaleDateString()}</p>
                  </div>
                
                  <hr
                  style={{
                    background: 'rgb(98 92 92)',
                    color: 'rgb(8 8 8)',
                    borderColor: 'rgb(12 11 11)',
                    height: '1.5px',
                    width: '96%',
                    marginTop: '11%',
                  }}
                  />
                  <br/>
                <div class="track" >
                <button type="button" class="btn  btn-lg" onClick={() => setVisible(!visible, val.order_id)}>{visible ? 'Track Order' : 'Track Order'}&nbsp;&nbsp;<i class="fa-solid fa-angle-right"></i></button>
                {visible && <div ><font size="5" style={{marginLeft:"4%"}}>{val.order_status} </font></div>}
                </div>
                &nbsp;&nbsp;&nbsp;
               
                	
                
                <div class="track1" >
          <Link to='/invoice' state={{finalid:val.finaloid}}> <button type="button" class="btn btn-light btn-lg" style={{float:'right'}}>Download Invoice &nbsp;&nbsp;<i class="fa-solid fa-angle-right"></i></button></Link>
           
           <button type="button" class="btn btn-light btn-lg" style={{marginLeft:'36%',marginTop:'-10.5%'}}   onClick={()=>deleteorder(val.order_id)}>Delete Order &nbsp;&nbsp;<i class="fa-solid fa-angle-right"></i></button>
           </div>
            
            
                </div>
               
        </div>
        </div>
        </div>
        <br/>         
        </div>
       
				</>
                )
           })

        }
   </div>
  
</div>
<br/>
<br/>
<br/>

				
   </>
  )
}
export default Myorder;