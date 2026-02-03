import React from 'react';
import  Axios  from 'axios';

function Admeditprofile()  {

    let user=JSON.parse(localStorage.getItem("admin"));


var admedit=()=>{

    let user=JSON.parse(localStorage.getItem("admin"));
		var uemail=user.email;
   
//alert(uemail)
        var newusername= document.getElementById('username').value;
        //var newemail= document.getElementById('uemail').value;
        var newoldpass= document.getElementById('oldpass').value;
        var newnewpass= document.getElementById('newpass').value;

       Axios.post('http://localhost:1337/api/newadmprofile',
       {name:newusername,pass:newoldpass,pass1:newnewpass,uemail:uemail}).then((response)=>{
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
   
   <div class="page-container">	
   <div class="left-content">	
   <div class="mother-grid-inner">
<br/>
				<h1 style={{marginLeft: '3%',   color: '#1e8ccd'}}>Change Profile</h1>
			</div>
			<div class="signup-block"  style={{padding: '2em 2em'}}>
     
				<form > 
         <div>
          <input type="text"  id="username"  placeholder=" Enter FullName"  defaultValue={user.name} required  style={{width:'50%'}}/>
          </div>
          <div>
          <input type="email"  id="uemail" name="email" placeholder=" Enter Email" Value={user.email}   style={{width:'50%'}}   required disabled   />
          </div>
          <div>    
          <input type="password"  id="oldpass"  name="password" class="lock" placeholder="Old Password"  style={{width:'50%'}}/>
          </div>
          <div>
          <input type="password"   id="newpass" name="password" class="lock" placeholder=" New Password" style={{width:'50%'}}/>
          </div>

					<div class="forgot-top-grids">
					
						<div class="clearfix"> </div>
					</div>
					<input type="submit" name="Sign In" value="Update"  onClick={admedit} style={{width:'25%', float:'left'}}/>														
				</form>
        
        <br/> <br/> <br/> 
				</div>
				
			</div>
    </div>
	

   </>
)
}
export default Admeditprofile;


