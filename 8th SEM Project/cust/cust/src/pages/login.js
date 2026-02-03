import React from "react";
import Axios  from "axios";

function Login() {
	function login(){

	var uemail=document.getElementById('uemail').value;
	var upass=document.getElementById('upass').value;

	// alert('email + pass');

	Axios.post('http://localhost:1337/api/login',
	{email:uemail,pass:upass }).then((response)=>{
		if(response.data.message)
		{
		alert(response.data.message);
		window.location="/log";
		}
	else{
	// console.log=(response);

	let obj={name:response.data[0].user_fullname,address:response.data[0].user_address,mobileno:response.data[0].user_mobileno,email:uemail,pass:upass}
	localStorage.setItem('Login',JSON.stringify(obj));

	alert('Successfully Login.....');
	window.location = "/"
	}
	});
}

return (
<>
<div class="banner1">
<div class="container">
	<h3><a href="./res/index.html">Home</a> / <span>Login</span></h3>
</div>
</div>

<div class="login">
<div class="main-agileits">
<form  onSubmit={login} >
  <div class="form-w3agile">
	<h3>Login / Sign-in</h3>

	<div class="key">
	<i class="fa-solid fa-envelope" style={{fontSize:"106%"}}></i>
	<input  type="email" id="uemail" placeholder="Enter Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
		<div class="clearfix"></div>
	</div>
	<div class="key">
	<i class="fa fa-lock" aria-hidden="true" style={{fontSize:"106%"}}></i>
	<input  type="password" id="upass" placeholder=" Enter Your Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required />
	<div class="clearfix"></div>
	</div>
	<input type="submit" value="Login" />
	</div>
	</form>
	<div class="forg">
	<a href="/forgetpassword" class="forg-left">Forgot Password</a>
	<a href="/create" class="forg-right" >Sign-Up</a>
	<div class="clearfix"></div>
	</div>
</div>
</div>
</>
);
}
export default Login;