import React from 'react';
import  Axios  from 'axios';
import  { useEffect,useState} from "react";

function Editprofile()  {



  const[custedit,setcustedit]=useState([]);
	
  //alert(uemail);
  
      useEffect(()=>{
      let user=JSON.parse(localStorage.getItem('Login'));
  var uemail=user.email;
  
          Axios.get('http://localhost:1337/api/edit_details',	{params: {
        uemail:uemail,
      }}).then((response)=>{
          //console.log(response.data);
          setcustedit(response.data);
  
          });
      
      },[]);




  //-------------------------------edit profile details--------------------------------------------

function editdetails(){
  

  let user=JSON.parse(localStorage.getItem("Login"));
		var uemail=user.email;

        var newusername= document.getElementById('username').value;
        var newemail= document.getElementById('email').value;
        var newaddress= document.getElementById('address').value;
        var newmobileno= document.getElementById('mobile').value;

       Axios.post('http://localhost:1337/api/newprofile',
       {name:newusername,email:newemail,address:newaddress,mobileno:newmobileno,uemail:uemail }).then((response)=>{
         if(response.data.message)
         {
           alert(response.data.message);
         window.location="/editprofile"
         }
       else{
       //console.log=(response);
       
       alert('Fail');
       window.location = "/"
       }
       });
   }


//-------------------------------update password--------------------------------------------



function updatepassword(){

  let user=JSON.parse(localStorage.getItem("Login"));
		var uemail=user.email;
  

        var oldpass= document.getElementById('oldpass').value;
        var newpass= document.getElementById('newpass').value;
      
        

       Axios.post('http://localhost:1337/api/updatepassword',
       {oldpass:oldpass, newpass:newpass,uemail:uemail }).then((response)=>{
         if(response.data.message)
         {
           alert(response.data.message);
         window.location="/editprofile"
         }
       else{
       //console.log=(response);
       
       alert('Fail');
       window.location = "/"
       }
       });
   }



  return (
   <>
   
   <div class="content">
			
				<div class="container">
        <div class="editprofile col-md-12">
 
                <div class="editprofile col-md-3">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="account-settings">
                        <div class="user-profile">
                          <div class="user-avatar">
                            <img src="./res/images/user1.png" alt="Maxwell Admin"/>
                          </div>
                          {custedit.map((val)=>{
                             return( 
							           <>
                          <h5 class="user-name">{val.user_fullname}</h5>
                          <h6 class="user-email">{val.user_email}</h6>
                          </>
                  )
             })
          }
                        </div>
                        
                        </div>
                      </div>
                  </div>
              </div>
             
             
         <div class="editprofile col-md-9"> 
                <div class="editprofile col-md-6"> 
                <div class="card h-100">
                  <div class="card-body">
                    <div class="personal">
                   
                        <h4 class="mb-2 text-primary"> Change Profile</h4>
                    </div>
                    <br/>
                    {custedit.map((val)=>{
                             return( 
							           <>
                   <h4> Enter Fullname : </h4>
                        <div class="key">
                      <input  type="text" id="username" placeholder="Enter Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}"  defaultValue={val.user_fullname} required  />
                      <div class="clearfix"></div>
                    </div>

                    <h4>  Enter Email : </h4>
                    <div class="key">
                    <input  type="email" id="email" placeholder="Enter Email"  name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" defaultValue={val.user_email} disabled required />
                    <div class="clearfix"></div>
                  </div>


                  <h4>  Enter Address :</h4>
                          <div class="key">   
                    <input  type="text" id="address" placeholder="Enter Address"  name="Address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Address';}" defaultValue={val.user_address} required />
                    <div class="clearfix"></div>
                  </div>

                  <h4> Enter MobileNo. : </h4>
                      <div class="key">
                      <input  type="tel" id="mobile" placeholder="Enter Mobile No." pattern="[0-9]{10}" name="Mobile No." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Mobile No.';}"      defaultValue={val.user_mobileno} required />

                  <div class="clearfix"></div>
                </div>
                	</>
                  )
             })
          }
                </div>
               
                <div class="updatebutton" > 
                <button type="button" class="btn  btn-lg" onclick="document.getElementById('id01').style.display='none'"   style={{background:'gray', color:'white',width:'30%',fontSize:'22px' , marginright:'-90%'}}>Cancel</button>	
                
                &nbsp;&nbsp;&nbsp;
  
                <button type="button" class="btn  btn-lg" onClick={()=>editdetails()}>Update</button>	
                </div>
                    </div>
                </div>


                <div class="editprofile col-md-6"> 
                <div class="card h-100">
              
                  <div class="card-body">
                  
                    <div class="ChangePassword">
                        <h4 class="mb-2 text-primary">Change Password</h4>
                    </div>
                    <br/>
                    <br/>


                   
                          <div class="key">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input  type="password" id="oldpass" placeholder=" Enter Old Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required />
                    <div class="clearfix"></div>
                  </div>
                      <div class="key">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                  <input  type="password" id="newpass" placeholder="Enter New Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required />
                  <div class="clearfix"></div>
                </div>
                   
               
                    </div>
                    
                <div class="updatebutton1" >
                <button type="button" class="btn  btn-lg" style={{background:'rgb(136, 133, 133)', color:'white',width:'30%',fontSize:'22px' , marginright:'-90%'}}>Cancel</button>	
                &nbsp;&nbsp;&nbsp;
  
                <button type="button" class="btn  btn-lg"  onClick={updatepassword}>Update</button>	
                </div>
            
                    </div>
                </div>
              
                </div>
              
  </div>
  
              
  </div>
            
<br/><br/><br/><br/>
  </div>
   </>
  );
}
export default Editprofile;
