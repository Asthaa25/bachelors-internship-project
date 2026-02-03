import logo from './logo.svg';
import './App.css';
import Header from './component/header';

import Footer from './component/footer';

import Home from './pages/home';

import Login from './pages/login';

import Logout from './pages/logout';

import Womenproduct1 from './pages/womenproduct1';

import Createaccount from './pages/createaccount';

import Addtocart from './pages/addtocart';

import Forget from './pages/forgetpassword';

import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Wishlist from './pages/wishlist';

import Invoice from './pages/invoice';

import Contact from './pages/contact';

import Editprofile from './pages/editprofile';

import Myorder from './pages/my_orders';
import Menproduct1 from './pages/menproduct1';
import Luggages from './pages/luggageproduct';
import Giftcombos from './pages/giftcombos';
import Singleproductpage from './pages/singleproductpage';



function App() {
  
  return (
    <>

<Router>
<div class="header">
<Header/>


<Routes>

<Route exact path='/' element ={<Home/>} />

<Route exact path='/log' element ={<Login/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/logout' element ={<Logout/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/create' element ={<Createaccount/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/home' element ={<Home/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/create' element ={<Createaccount/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/women' element ={<Womenproduct1/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/men' element ={<Menproduct1/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/luggage' element ={<Luggages/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/giftcombo' element ={<Giftcombos/>} />

<Route exact path='/singlepropage' element ={<Singleproductpage/>} />




<Route exact path='/' element ={<Home/>} />

<Route exact path='/addtocart' element ={<Addtocart/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/wishlist' element ={<Wishlist/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/forgetpassword' element ={<Forget/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/invoice' element ={<Invoice/>} />

<Route exact path='/' element ={<Home/>} />

<Route exact path='/contact' element ={<Contact/>} />

<Route exact path='/' element={<Home/>}/>

<Route exact path='/editprofile' element ={<Editprofile/>} />

<Route exact path='/' element={<Home/>}/>

<Route exact path='/myorder' element ={<Myorder/>} />

</Routes>

<Footer/>
</div>

</Router>
    
    </>
  );
}

export default App;
