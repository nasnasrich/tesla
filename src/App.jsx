import { Route, Routes } from "react-router-dom";

import Nav from "./Component/Nav.jsx";
import Card from "./Component/Card.jsx";
import Hero from "./Component/Hero.jsx";
import Home from "./Component/Home.jsx";
import CompanyReviews from "./Component/CompanyReviews.jsx";
import Vehicles from "./Component/Vehicles.jsx";
import Formemployment from "./Component/Formemployment.jsx";
import Ordernow from "./Component/Ordernow.jsx";
import TeslaSalaries from "./Component/TeslaSalaries.jsx";
import Offer from "./Component/Offer.jsx";
import TrackingPage from "./Component/TrackingPage.jsx";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import WomenCategory from "./Pages/WomenCategory.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/card" element={<Card />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/companyreviews" element={<CompanyReviews />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/formemployment" element={<Formemployment />} />
        <Route path="/ordernow" element={<Ordernow />} />
        <Route path="/womencategory" element={<WomenCategory />} />
        <Route path="/teslasalaries" element={<TeslaSalaries />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/trackingpage" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
