import React from "react";
import Axios from 'axios';
import  {useState} from "react";

function Createproduct(){

    const [upload,setupload]=useState("");


  function create(){



    var config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
      };
      
     
    

        var name=document.getElementById('name').value;
        var price=document.getElementById('price').value;
        var description=document.getElementById('description').value;
        var category=document.getElementById('category').value;
        var subcategory=document.getElementById('subcategory').value;
        var stock=document.getElementById('stock').value;
        var images=document.getElementById('images').value;



        var data = new FormData();
        data.append('rpimage',upload);
        data.append('name',name);
        data.append('price',price);
        data.append('description',description);
        data.append('category',category);
        data.append('subcategory',subcategory);
        data.append('stock',stock);
        data.append('images',images);



        Axios.post('http://localhost:1337/api/createpro',data,config).then((response)=>{
       // {name:name,price:price,description:description,category:category,stock:stock,images:images }).then((response)=>{
            if(response.data.message)
            {
            alert(response.data.message);
            window.location="/product"
            }
        else{
        //console.log=(response);
        
        alert('Fail');
        window.location = "/"
        }
    });
}
        
return(

<>
<div class="page-container">	
   <div class="left-content">	
   
   <br/>
<br/>
     <div class="signup-main">  	
    	 <div class="signup-head">
				<h1>Create Product</h1>
			</div>
			<div class="signup-block">
				<form>
                <font size="4"><b> Name : </b></font>
					<input type="text" id="name" name="name" placeholder="Name" required=""/>
                    <font size="4"><b> Price :</b></font>
					<input type="text" id="price" name="price" placeholder="Price" required=""/>
                    <div class="key">
                    <font size="4"><b>Description :</b></font>
							<textarea  type="text" id="description" placeholder="Enter Description"  name="Description" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Description';}" required=""  rows="4" cols="50"/>
							<div class="clearfix"></div>
						</div>
                       <br/>
                        <font size="4"><b> Category :</b></font> &nbsp;
                           <select name="category" id="category" placeholder="Category">
                            
                                     <option value="Women Shoes">Women Shoes</option>
                                     <option value="Men Shoes">Men Shoes</option>
                                     <option value="Women Jackets">Women Jackets</option>
                                     <option value="Men Jackets">Men Jackets</option>
                                     <option value="Hangbags">Hangbags</option>
                                     <option value="Men Belts">Men Belts</option>
                                     <option value="Women Belts">Women Belts</option>
                                     <option value=" Men Watches">Men Watches</option>
                                     <option value="Women Watches">Women Watches</option>
                                     <option value="Laptop Bags"> Laptop Bags</option>
                                     <option value=" Women Wallets"  >Women Wallets</option>
                                     <option value="Men Wallets"  >Men Wallets</option>
                                     <option value="Clutches">Clutches</option>
                                     <option value="Luggage bags">Luggage bags</option>
                                     <option value="Women Gift combos">Women Gift combos</option>
                                     <option value="Men Gift combos">Men Gift combos</option>
                            </select>
                            <br/><br/>
                    
                      <font size="4"><b> Sub_Category :</b></font> &nbsp;
                           <select name="category" id="subcategory" placeholder="Category">
                            
                                     <option value="Men">Men</option>
                                     <option value="Women">Women</option> 
                                     <option value="Luggage Bags">Luggage Bags</option>
                                     <option value="Gift Combos">Gift Combos</option>           
                            </select>
                            <br/> <br/>
                     
                     <font size="4"><b> Stock : </b></font>
					<input type="text" id="stock" name="stock" placeholder="0" required=""/>

                    <div>
                    <label for="files"><font size="4"><b>Images : </b></font></label>
                        <input type="file" id="images" name="files" multiple   onChange={(e) => setupload(e.target.files[0])}/>
                    </div>
                        <br/>
                        <div class="clearfix">
                        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn" onClick={create}>Create</button>
      </div>													
				</form>
				
			</div>
    </div>
</div>
</div>

</>


    
)


} 

export default Createproduct;