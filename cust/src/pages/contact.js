import React from 'react';

function Contact(){
  return (
   <>
  
   <div class="content">
				
					<div class="mail-w3ls">
						<div class="container">
							<h2 class="tittle">Contact &nbsp; Us</h2>
							<div class="mail-grids">
								<div class="mail-top">
									<div class="col-md-4 mail-grid">
										<i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>
										<h5>Address</h5>
										<p>2B, Neptune Tower, BPC Rd, near Productivity House, Alkapuri, Vadodara, Gujarat 390007</p>
									</div>
									<div class="col-md-4 mail-grid">
										<i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>
										<h5>Phone</h5>
										<p>Telephone : &nbsp; (+91) 8140231918</p>
									</div>
									<div class="col-md-4 mail-grid">
										<i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>
										<h5>E-mail</h5>
										<p>E-mail :&nbsp;<a href="mailto:contact@enlighteninfosystems.com"> contact@enlighteninfosystems.com</a></p>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="map-w3">
								<iframe src="https://maps.google.com/maps?q=enlighten infosystem&t=&z=10&ie=UTF8&iwloc=&output=embed"  allowfullscreen></iframe>
								</div>
								<div class="mail-bottom">
									<h4>Get In Touch With Us</h4>
									<form action="#" method="post" >
										<input type="text" placeholder='Enter Your Name'  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required />

										<input type="email" placeholder='Enter Your Email' onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />

										<input type="text"  maxLength={10} placeholder='Enter Your Mobile Number' onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone';}" required />

										<textarea  placeholder='Enter Your Message. . . . . .' onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required ></textarea>

										<input type="submit" value="Submit"  />
                                        &nbsp; &nbsp; &nbsp;
										<input type="reset" value="Clear" />

									</form>
								</div>
							</div>
						</div>
					</div>
			
			</div>
   
   
   </>
  )
}
export default Contact;