import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';


function Invoice (){

  let user=JSON.parse(localStorage.getItem("Login"));

	const[invoicedisplay,setinvoicedisplay]=useState([]);
  //alert(uemail);
  
  const location =useLocation();
  const invoicepro =location.state.finalid;



  useEffect(() => {
    //console.log(jackets);
    Axios.get('http://localhost:1337/api/invoicedisplay', 
    {params: {
      name:invoicepro,
    }}).then((response)=>{
          console.log(response.data);
          setinvoicedisplay(response.data);
          });
        },[]);


      const calculateTotal = () => {
        let total = 0;
        invoicedisplay.map((val) => (total = total + val.order_quantity * val.P_price));
        return total;
        };
    

        function Export() {
       
          var d = new Date().toLocaleString();
          const s =document.getElementById('download');
          
          const pdf = new jsPDF('l', 'in', [13, 15]);
              if (pdf) {
                 
                domtoimage.toPng(s)
                  .then(imgData => {
                    pdf.addImage(imgData, 'PNG', 1, 1 );
                    pdf.save(d + ".pdf");
                  });
              }
      
      }
      




  return (
    <>
    <div class="content">
			<div class="cart-items">
				<div class="container">
       
				<div class="col-md-12" id="download">
        
                         <div class="col-md-12">
                         { invoicedisplay.slice(0,1).map((val)=>{
                             return( 
							<>
                            <div class="invoicetitle">
                     <h2 > <strong>Invoice ID: </strong> &nbsp;#LL/1909-5013-1023/{val.finaloid} </h2>
                     
									 <div class="clearfix"></div>
            </div>
                       
  	</>
    )
})

}
            </div>
         
       
        <br/><br/><br/><br/><br/>    
        <hr
        style={{
          background: 'rgb(172, 163, 163) ',
          color:'rgb(172, 163, 163)' ,
          borderColor: 'rgb(172, 163, 163)' ,
          height: '1px',
          width:'90%' ,
        }}
      />  
      <br/>
      <div class="row">



      <div class="col-md-4" style={{float:"left"}}>
        
                         
        <ul class="list-unstyled" style={{marginRight:'-31%',marginLeft:'-4%'}}>
          <li><font size="5">To : {user.name} </font></li>
         
          <li><font size="5">Shipping Address: {user.address} </font></li>

        </ul>

        <div class="clearfix"></div>
      </div>

          <div class="col-md-4" style={{float:"right"}}>
            <div > 
            { invoicedisplay.slice(0,1).map((val)=>{
                             return( 
							<>
                            
            <ul class="list-unstyled" style={{marginRight:'11%',marginLeft:'-39%',fontSize:'20px'}}>
              <li><font size="5">Email ID: &nbsp;{val.user_id}</font></li>
              
              <li><font size="5">Order Date: &nbsp; {new Date(val.order_date).toLocaleDateString()} </font></li>
            </ul>
           
            </>
            )
        })
        
        }
 </div>
            <div class="clearfix"></div>
          </div> 
        
            </div>
        <div class="row1 my-2 mx-1 justify-content-center">


        <table class="table table-hover table-bordered" style={{width:'100%'}}>
                    <thead  style={{background:'#84B0CA' }} class="text-white">
                      <tr>
                        <th scope="col"># Order Id</th>
                        <th scope="col">Order Details</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                    { invoicedisplay.map((val)=>{
                             return( 
						      	<>
                      <tr>
                        <th scope="row">{val.order_id}</th>
                        <td>{val.P_name}</td>
                        <td>{val.order_quantity}</td>
                        <td>Rs. {val.P_price}</td>
                        <td>Rs.{val.order_quantity * val.P_price}</td>
                      </tr>
                      </>
                    )
                })

                }
                    </tbody>
                  </table>
         
        </div>
        <div class="row2">
         
          <div class="row3">         
           <div class="col-md-5" style={{float:"right"}}>
            <ul class="list-unstyled">
              <li >SubTotal: &nbsp;  Rs. {calculateTotal()}</li>
             
            </ul>
            <ul class="charge">
           
              <li>Delivery Charges:&nbsp;<del>Rs. 99</del> <em class="item_price">FREE</em></li>
            </ul>
            <p > <font size="5"><b>Total Amount:</b></font> &nbsp;  <b>Rs.  {calculateTotal()}</b></p>
          </div>
          </div>

        </div>
        <br/>
        <hr
        style={{
          background: 'rgb(172, 163, 163) ',
          color:'rgb(172, 163, 163)' ,
          borderColor: 'rgb(172, 163, 163)' ,
          height: '1px',
          width:'90%' ,
          marginTop:'15%'
        }}
        />
        
        <div class="row2">
          <div class="col-xl-10">
            <p>Thank you for your purchase&nbsp; !!</p>
		
           
     </div>
     </div> 
 </div>
 <div class="col-md-4" style={{float:"right"}}>
     <div class="delivery1">
                
                <button type="button" class="btn btn-light btn-lg" style={{size:'5'}} id="btnExport" value="PDF" onClick={Export}><font size="5" ><i class=" fa fa-solid fa-file-pdf"></i> &nbsp;Download <i class="fa-solid fa-angle-right"></i> </font></button>
            
                <div class="clearfix"></div>
          </div>
      </div>
</div>
</div>
</div>   

    
    </>

  );
}

export default Invoice;