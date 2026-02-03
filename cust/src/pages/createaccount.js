import React from "react";
import Axios from 'axios';

function Createaccount(){
	function reg(){

	var username=document.getElementById('username').value;
	var address=document.getElementById('address').value;
	var email=document.getElementById('email').value;
	var mobile=document.getElementById('mobile').value;
	var pass=document.getElementById('pass').value;
	// var confirmpass=document.getElementById('confirmpass').value;

	// alert('Enter valid details!!');


	Axios.post('http://localhost:1337/api/insert',
{name:username,address:address,email:email,mobileno:mobile,pass:pass }).then((response)=>{
	if(response.data.message)
	{
    alert(response.data.message);
	window.location="/log"
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

<div class="banner1">
			<div class="container">
				<h3><a href="./res/index.html">Home</a> / <span>Create Account</span></h3>
			</div>
</div>
	


		<div class="content">
				
			<div class="login">
		<div class="main-agileits">
			<form  onSubmit={reg} >
				<div class="form-w3agile form1">
					<h3>Create Account !!</h3>
					
						<div class="key">
							<i class="fa fa-user" aria-hidden="true" style={{fontSize:"106%"}}></i>
							<input  type="text" id="username" placeholder="Enter Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" required  />
							<div class="clearfix"></div>
						</div>
						<div class="key">
							<i  class="fa-solid fa-location-dot" aria-hidden="true" style={{fontSize:"106%"}}></i>
							<input  type="text" id="address" placeholder="Enter Address"  name="Address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Address';}" required />
							<div class="clearfix"></div>
						</div>
						<div class="key">
							<i class="fa fa-envelope" aria-hidden="true" style={{fontSize:"106%"}}></i>
							<input  type="email" id="email" placeholder="Enter Email"  name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
							<div class="clearfix"></div>
						</div>
						<div class="key">
							
							<i class=" fa fa-solid fa-mobile" aria-hidden="true" style={{fontSize:"106%"}}></i>
							
							<input  type="tel" id="mobile" placeholder="Enter Mobile No." pattern="[0-9]{10}" name="Mobile No." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Mobile No.';}" required />
							<div class="clearfix"></div>
						</div>
						<div class="key">
							<i class="fa fa-lock" aria-hidden="true" style={{fontSize:"106%"}}></i>
							<input  type="password" id="pass" placeholder=" Enter Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required />
							<div class="clearfix"></div>
						</div>
						<div class="key">
							<i class="fa fa-lock" aria-hidden="true" style={{fontSize:"106%"}}></i>
							<input  type="password" id="confirmpass" placeholder="Confirm Password" name="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" required />
							<div class="clearfix"></div>
						</div>
						<input type="submit" value="Submit" />
					
				</div>
				</form>
			</div>
		</div>

</div>
</>



);

}
export default Createaccount;