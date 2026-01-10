import DashBoard from './Pages/DashBoard'
import { Route, Routes } from 'react-router-dom'
import Nav from "./Component/Nav"
import Card from './Component/Card'
import Login from './Pages/login'
import Registration from './Pages/Registration'
import Hero from './Component/Hero'
import Home from './Component/Home'
import Companyreviews from './Component/companyreviews'
import Vehicles from './Component/vehicles'
import Formemployment from './Component/Formemployment'
import Ordernow from './Component/Ordernow'
import TeslaSalaries from "./Component/TeslaSalaries"
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import WomenCategory from "./Pages/WomenCategory";
import Offer from "./Component/Offer";
import TrackingPage from './Component/TrackingPage';



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
  <Route path='/Companyreviews' element = {<Companyreviews/>}/>
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
