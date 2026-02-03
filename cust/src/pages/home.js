import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";


function Home(){

	

return (
	

    <>
    
    <div class="banner-w3">
			<div class="demo-1">   
			  
				<div id="example1" class=" core-slider core-slider__carousel example_1">
					<div class="core-slider_viewport">
						<div class="core-slider_list">
							<div class="core-slider_item">
								<img src="./res/images/b1.jpg" class="img-responsive"  alt=""/>
							</div>
							<div class="core-slider_item">
								 <img src="./res/images/b2.jpg" class="img-responsive" alt=""/>
							 </div>
							<div class="core-slider_item">
								  <img src="./res/images/b3.jpg" class="img-responsive" alt=""/>
							</div>
							<div class="core-slider_item">
								  <img src="./res/images/b4.jpg" class="img-responsive" alt=""/>
							</div>
						 </div>
					</div>
					<div class="core-slider_nav">
						<div class="core-slider_arrow core-slider_arrow__right"></div>
						<div class="core-slider_arrow core-slider_arrow__left"></div>
					</div>
					<div class="core-slider_control-nav"></div>
				</div>
				
		<div class="content">
			
				<div class="ban-bottom-w3l">
					<div class="container">
						<div class="col-md-6 ban-bottom">
							<div class="ban-top">
								<img src="./res/images/p1.jpg" class="img-responsive" alt=""/>
								<div class="ban-text">
								<Link to='/men' state={{name:"All"}}><h4>Men’s Clothing</h4></Link>
								</div>
								<div class="ban-text2 hvr-sweep-to-top">
									<h4>50% <span>Off/-</span></h4>
								</div>
							</div>
						</div>
						<div class="col-md-6 ban-bottom3">
							<div class="ban-top">
								<img src="./res/images/p2.jpg" class="img-responsive" alt=""/>
								<div class="ban-text1">
								<Link to='/women' state={{name:"All"}}><h4>Women's Clothing</h4></Link>
								</div>
							</div>
							<div class="ban-img">
								<div class=" ban-bottom1">
									<div class="ban-top">
										<img src="./res/images/leluggage1.jpg" class="img-responsive" alt=""/>
										<div class="ban-text1">
										<Link to='/luggage' state={{name:"Luggage bags"}}><h4>Luggage Bags</h4></Link>
										</div>
									</div>
								</div>
								<div class="ban-bottom2">
									<div class="ban-top">
										<img src="./res/images/gift combo 1.jpg" class="img-responsive" alt=""/>
										<div class="ban-text1">
										<Link to='/giftcombo' state={{name:"All"}}><h4>Gift Sets</h4></Link>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				</div>   

				
			<div class="accessories-w3l">
				<div class="container">
					<h3 class="tittle">20% Discount on</h3>
					<span>TRENDING DESIGNS</span>
					<div class="button">
						<a href="#" class="button1"> Shop Now</a>
						<a href="#" class="button1"> Quick View</a>
					</div>
				</div>
			</div>
			
			
			</div>
			</div>
		<br/>	<br/>
		<br/>


		
	

    </>



);


}
export default Home;