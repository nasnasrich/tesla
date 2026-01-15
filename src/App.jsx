// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Log from "./Pages/Log.jsx"; // one login page
import Login from "./Pages/login.jsx"; // second login page
import Registration from "./Pages/Registration.jsx"; // one registration page
import Registre from "./Pages/Registre.jsx"; // second registration page
import Home from "./Component/Home.jsx";
import DashBoard from "./Pages/DashBoard.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import WomenCategory from "./Pages/WomenCategory.jsx";
import Card from "./Component/Card.jsx";
import Hero from "./Component/Hero.jsx";
import Companyreviews from "./Component/Companyreviews.jsx";
import Vehicles from "./Component/Vehicles.jsx";
import Formemployment from "./Component/Formemployment.jsx";
import Ordernow from "./Component/Ordernow.jsx";
import TeslaSalaries from "./Component/TeslaSalaries.jsx";
import Offer from "./Component/Offer.jsx";
import TrackingPage from "./Component/TrackingPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Log />} />

      {/* Login Pages */}
      <Route path="/login" element={<Login />} />        {/* lowercase login */}
      <Route path="/log" element={<Log />} />            {/* second login page */}

      {/* Registration Pages */}
      <Route path="/registration" element={<Registration />} /> {/* main registration */}
      <Route path="/registre" element={<Registre />} />     {/* second registration */}

      {/* Other pages */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/card" element={<Card />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/companyreviews" element={<Companyreviews />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/formemployment" element={<Formemployment />} />
      <Route path="/ordernow" element={<Ordernow />} />
      <Route path="/teslasalaries" element={<TeslaSalaries />} />
      <Route path="/womencategory" element={<WomenCategory />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/trackingpage" element={<TrackingPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;