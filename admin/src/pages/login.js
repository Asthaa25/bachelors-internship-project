import React from "react";
import Axios  from "axios";

function Login(){


	var verify =(e)=>{

//e.preventDefault();
 // alert("HI");
		var uemail=document.getElementById('uemail').value;
		var upass=document.getElementById('upass').value;

		// alert('email + pass');

Axios.post('http://localhost:1337/api/admin',
{email:uemail,pass:upass }).then((response)=>{
	if(response.data.message)
	{
	alert(response.data.message);
	window.location="/log";
    }
		else{
		// console.log=(response);
		let obj={name:response.data[0].admin_name,email:uemail,pass:upass}
		localStorage.setItem('admin',JSON.stringify(obj));
		alert('Successfully login........');
		window.location="/dashboard";
		}
	})
	};

return(

<>
<div class="page-container">	
   <div class="left-content">	 
<br/>
<br/>
    <div class="login-main">  	
    	 <div class="login-head">
            
				<h1>Lavishly Leathers Admin !!</h1>
			</div>
			<div class="login-block">
				<form onSubmit={verify} >
					<input type="email" id="uemail" name="email" placeholder="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
					<input type="password"   id="upass" name="password" class="lock" placeholder="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"  required />
					
					<input type="submit" name="Sign In" value="Login" />
					</form>	
					
						
					
					
			</div>
      </div>
</div>

</div>

</>
    
)}

export default Login;









  