import React from "react";
import Axios from 'axios';
import  { useEffect,useState} from "react";

function Product(){

	const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1337/api/addproduct').then((response)=>{
        //console.log(response.data);
        setlist(response.data);

        });
    
    },[]);


    function removepro(proid){

      //alert(proid);
      
        Axios.post('http://localhost:1337/api/removeproduct',
        {proid:proid }).then((response)=>{
          if(response.data.message)
          {
          alert(response.data.message);
          window.location="/product";
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
    		<h2 align="left"> Manage Products</h2> 
    	</div>

		
        <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                    
    <table class="table table-striped table-bordered t3-table-all" >
      <thead>
        <tr >

        <th>Pr_ID</th>
        <th>P_Name</th>
		<th>P_Price</th>
		<th>P_Description</th>
		<th>P_Category</th>
    <th>P_sub_Category</th>
		<th>P_Stock</th>
		<th>P_images</th>
		<th>Action </th>
      </tr>
    </thead>

	
<tbody>


	{list.map((val)=>{
                return(  
                    <tr>
                        <td> {val.Pr_id}    </td>
                        <td> {val.P_name}    </td>
                        <td> {val.P_price}   </td>
                        <td> {val.P_description} </td>
                        <td> {val.P_category}    </td>
                        <td> {val.P_sub_category}    </td>
                        <td> {val.P_stock}    </td>
                        <td> <img src={"http://localhost:1337/public/"+val.P_images}  height="80" width="80"></img></td>
                        <td>

<div id="container">
  
<div class="clearfix">
    
<a href="/createproduct"><button type="submit" id="edit-button" class="editbtn" >Edit &nbsp; &nbsp;<i class="fa-solid fa-pen-to-square"></i></button></a>
&nbsp;
  <button type="submit" id="end-editing" class="deletebtn" onClick={()=>removepro(val.Pr_id)}>Delete  &nbsp;<i class="fa fa-regular fa-trash"></i></button> 
  </div>
  </div>
</td>
                    </tr>

					

                )
            })
            
           }

</tbody>
</table>


</div>
		</div>
		
    </div>
</div>
</div>	
</div>

</>
);
}
export default Product;