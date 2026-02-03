import React from 'react';
import { Link } from "react-router-dom";

function Footer(){

return(
<>

<div class="footer-w3l">
						<div class="container">
							<div class="footer-grids">
								<div class="col-md-3 footer-grid">
									<h4>About </h4>
									<p>Lavishly Leathers is a brand that provides luxurious way to carry yourself and gives more consistency and comfort to every product we make.</p>
									<div class="social-icon">
										<a href="#"><i class="icon"></i></a>
										<a href="#"><i class="icon1"></i></a>
										<a href="#"><i class="icon2"></i></a>
										<a href="#"><i class="icon3"></i></a>
									</div>
								</div>
								<div class="col-md-3 footer-grid">
									<h4>My Account</h4>
									<ul>
										
										<li><a href="/log">Login</a></li>
										<li><a href="/create"> Create Account </a></li>
									</ul>
								</div>
								<div class="col-md-3 footer-grid">
									<h4>Information</h4>
									<ul>
										<li><a href="/home">Home</a></li>
										<li><Link to='/women' state={{name:"All"}}>Women</Link></li>
										<li><Link to='/men' state={{name:"All"}}>Men</Link></li>
										<li><Link to='/luggage' state={{name:"Luggage bags"}}>Luggage</Link></li>
										<li><Link to='/giftcombo' state={{name:"All"}}>Gift Combos</Link></li>
									</ul>
								</div>
								<div class="col-md-3 footer-grid foot">
									<h4>Contacts</h4>
									<ul>
										<li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i><a href="#">2B, Neptune Tower, BPC Rd, near Productivity House, Alkapuri, Vadodara, Gujarat 390007</a></li>
										<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i><a href="#">(+91) 8140231918</a></li>
										<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:contact@enlighteninfosystems.com">contact@enlighteninfosystems.com</a></li>
										
									</ul>
								</div>
							<div class="clearfix"> </div>
							</div>
							
						</div>
					</div>

                    <div class="copy-section">
						<div class="container">
							<div class="copy-left">
							<p> Lavishly Leathers &nbsp;<i class="fa-solid fa-copyright"></i>&nbsp; 2023. All Rights Reserved.</p>

							</div>
							<div class="copy-right">

								<img src="./res/images/card.png" alt=""/>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

</>


);


}

export default Footer;