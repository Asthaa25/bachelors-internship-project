import React from "react";

function Signup(){

return(



<>
<div class="page-container">	
   <div class="left-content">	
   <div class="mother-grid-inner">
<br/>
				<h1 style={{marginLeft: '3%'}}>Sign Up</h1>
			</div>
			<div class="signup-block">
				<form>
					<input type="text" name="email" placeholder="Name" required=""/>
					<input type="text" name="email" placeholder="Email" required=""/>
					<input type="password" name="password" class="lock" placeholder="Password"/>
					<div class="forgot-top-grids">
					
						<div class="clearfix"> </div>
					</div>
					<input type="submit" name="Sign In" value="Sign up"/>														
				</form>
				<br/><br/><br/><br/>
				<br/><br/><br/><br/>
				<br/>

			</div>
    </div>
	</div>
</>


    
)


} 

export default Signup;