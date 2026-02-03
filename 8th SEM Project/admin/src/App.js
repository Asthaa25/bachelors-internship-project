import logo from './logo.svg';
import './App.css';

import Header from './component/header';

import Sidebar from './component/sidebar';

import Footer from './component/footer';

import Dashboard from './pages/dashboard';

import Login from './pages/login';

import Signup from './pages/signup';

import Product from './pages/Product/product';

import Createproduct from './pages/Product/createproduct';

import Order from './pages/manage_order';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Admeditprofile from './pages/admeditprofile';
import Regiscustomer from './pages/registeredcustomers';

function App() {
  return (
    
<>
{ localStorage.getItem("admin") ==null?
    
    <>
    <Router>
    <Login/>
    </Router>
    </>
    :
    <>
<div class="container-scroller">
    <Router>
<div class="header">
<Header/>
  </div>
<Sidebar/>

<div class="main-panel">

<Routes>

<Route exact path='/'  element ={<Sidebar/>}  />

<Route exact path='/log' element ={<Login/>} />

<Route exact path='/'  element ={<Sidebar/>}  />

<Route exact path='/order' element ={<Order/>} />

<Route exact path='/'  element ={<Sidebar/>}  />

<Route exact path='/product' element ={<Product/>} />

<Route exact path='/'  element ={<Sidebar/>}  />

<Route exact path='/createproduct' element ={<Createproduct/>} />


<Route exact path='/' element ={<Dashboard/>} />

<Route exact path='/dashboard' element ={<Dashboard/>} />


<Route exact path='/' element ={<Sidebar/>} />

<Route exact path='/admeditpro' element ={<Admeditprofile/>} />

<Route exact path='/' element ={<Sidebar/>} />

<Route exact path='/regiscustomer' element ={<Regiscustomer/>} />

</Routes>
</div>
<Footer/>

</Router></div>
 </>
    
    
    }



</>

  );
}

export default App;



