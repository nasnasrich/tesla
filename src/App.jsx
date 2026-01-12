import DashBoard from "./Pages/DashBoard.jsx";
import { Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav.jsx";
import Card from "./Component/Card.jsx";
import Login from "./Pages/login.jsx";
import Registration from "./Pages/Registration.jsx";
import Hero from "./Component/Hero.jsx";
import Home from "./Component/Home.jsx";
import CompanyReviews from "./Component/CompanyReviews.jsx";
import Vehicles from "./Component/Vehicles.jsx";
import Formemployment from "./Component/Formemployment.jsx";
import Ordernow from "./Component/Ordernow.jsx";
import TeslaSalaries from "./Component/TeslaSalaries.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import WomenCategory from "./Pages/WomenCategory.jsx";
import Offer from "./Component/Offer.jsx";
import TrackingPage from "./Component/TrackingPage.jsx";




// import React from 'react'

function App() {
  return (
    <>
    <Nav/>
  <Routes>
  {/* <Route path='/' element = {<DashBoard/>}/> */}
  <Route path='/' element = {<Login/>}/>
  <Route path="/cart" element={<Cart />} />
  <Route path='/Card' element = {<Card/>}/>
  <Route path='/Checkout' element = {<Checkout/>}/>
  <Route path='/Login' element = {<Login/>}/>
  <Route path='/Registration' element = {<Registration/>}/>
  <Route path='Hero' element = {<Hero/>}/>
  <Route path='/Home' element = {<Home/>}/>
  <Route path="/Companyreviews" element={<CompanyReviews />} />
  <Route path='/Vehicles' element = {<Vehicles/>}/>
  <Route path='/Formemployment' element = {<Formemployment/>}/>
  <Route path='/Ordernow' element = {<Ordernow/>}/>
  <Route path='/WomenCategory' element = {<WomenCategory/>}/>
  <Route path='/TeslaSalaries' element = {<TeslaSalaries/>}/>
  <Route path='/Offer' element = {<Offer/>}/>
  <Route path='/TrackingPage' element = {<TrackingPage/>}/>

   </Routes>
    </>
  )
}

export default App
