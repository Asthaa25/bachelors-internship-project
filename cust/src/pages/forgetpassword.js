import React from "react";
import Axios  from "axios";

function Forget() {
	

var forgetpass=()=>{

	var uemail=document.getElementById("uemail").value;

	Axios.post('http://localhost:1337/api/forgetpass',
	{email:uemail }).then((response)=>{
		if(response.data.message)
		{
			alert('Email not found');
		}
	else{
	// console.log=(response);

	alert('Email Send !!');
	window.location = "/log"
	}
	});


}



      
return (

<>
<div class="banner1">
			<div class="container">
				<h3><a href="./res/index.html">Home</a> / <span>Forget Password</span></h3>
			</div>
</div>
<div class="login">
				<div class="main-agileits">
					<div class="form-w3agile">
                    <center><font size="7" color="#1565C0"><i class="fa-solid fa-lock"></i></font></center>
                    <br/>
                   
                    <div class="forgetpassword">
						<h3>Forget Password ?</h3>
                         <p>
                            Enter your registered email and we'll send a link on your email to reset your password.
                           </p>
                           </div>
                           <br/>
						   <div class="key">
							
						    <i class="fa-solid fa-envelope" style={{fontSize:"106%"}}></i>
							<input  type="email" id="uemail" name="Email" placeholder="Enter Registered Email......" required />
								<div class="clearfix"></div>
							</div>
							
							<input type="submit" value="SUBMIT" onClick={forgetpass} />
                           
					</div>
					<div class="forget">
                        <center>
                        <i class="fa fa-solid fa-angles-left"></i>
                        &nbsp;
						<a href="/log" class="forget-left">Back to Login</a>
						</center>
					<div class="clearfix"></div>
					</div>
				</div>
			</div>


</>


);


}
export default Forget;