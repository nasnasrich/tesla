import React, { useState, useEffect } from "react";
import "./Vehicles.css";
import './Ordernow.css';
import oldpickmon from "../assets/oldpickmon.png";
import gozie from "../assets/gozie.png";
import tooblack from "../assets/tooblack.jpg";
import TeslaModelYWrapMilitaryGreen from "../assets/TeslaModelYWrapMilitaryGreen.jpeg";
import redcar from "../assets/redcar.jpg";
import wits from "../assets/wits.jpg";
import somet from "../assets/somet.jpg";
import { Link } from "react-router-dom";
import ProductModal from '../Component/ProductModal';
import { useCart } from "../context/CartContext";
import Nav from "./Nav";

// Slideshow images
import slide1 from "../assets/bieu.jpg";
import slide2 from "../assets/buieback.jpg";
import slide3 from "../assets/mmm.jpg";

function Ordernow() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const { addToCart } = useCart();
  const [cartAlert, setCartAlert] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Vehicle data
  const vehicles = [
    { id: 1, name: "Tesla Model 3", image: tooblack, price: 54990, description: "Base Tesla Model 3 Performance - starting price, before fees/taxes.", colors: ["Red","Blue","Black","White"], range:410, topSpeed:140 },
    { id: 2, name: "Tesla Model Y", image: TeslaModelYWrapMilitaryGreen, price: 59000, description: "Tesla Model Y Performance - High-Performance Electric SUV.", colors: ["Military Green","Black","White"], range:330, topSpeed:135 },
    { id: 3, name: "Tesla Model 3 Standard", image: redcar, price: 180000, description: "Tesla Semi - All-Electric Heavy-Duty Truck for Modern Freight.", colors: ["Red","Black","White"], range:350, topSpeed:145 },
    { id: 4, name: "Tesla Model 3 Wits", image: wits, price: 120000, description: "Tesla Cybertruck - Foundation Series Bold Design. Electric Power. Launch Edition.", colors: ["White","Black"], range:370, topSpeed:142 },
    { id: 5, name: "Tesla Model 3 Somet", image: somet, price: 59130, description: "Tesla Model Y Performance - High-Performance SUV with promo & destination.", colors: ["White","Red","Blue"], range:360, topSpeed:138 },
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Open modal
  const openModal = (vehicle) => {
    setSelectedProduct(vehicle);
    setModalOpen(true);
  };

  // Add to cart
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setCartAlert(`Added ${product.name} to your order`);
    setTimeout(() => setCartAlert(""), 2500);
    setModalOpen(false);
  };

  return (
    <>
    <Nav/>
    <div>
      {/* Cart Alert */}
      {cartAlert && <div className="cart-alert">{cartAlert}</div>}

      {/* HERO SECTION */}
      <div
        className="Vehicitt"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      >
        <div className="Vehiclesoneitc">
          <img src={oldpickmon} alt="Tesla Icon" className="vehicle-icon" style={{width:"80px"}} />
        </div>

        <div className="Vehictextt">
          <h1>Order Electric. Drive Smarter</h1>
          <p>
            Explore the Tesla Model range built with intelligent engineering and zero-emission performance
          </p>
          <p>Simple, secure ordering with transparent pricing and flexible delivery options</p>

          <div className="buttott">
            <Link to="/WomenCategory">
              <button className="btn">View Models</button>
            </Link>

            <Link to="/Companyreviews">
              <button className="btn secondary">Reviews</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="Vehicmoveline"><hr /></div>

      {/* HEADER */}
      <div className="Vehicmovett">
        <Link to="/Hero">
          <img src={gozie} alt="Tesla Icon" style={{ width: 100 }} />
        </Link>
      </div>

      <div className="mi">
        <div className="mitwo">
          <div>
            <h1>410 mi</h1>
            <h3>Range (EPA est.)</h3>
          </div>
          <div>
            <h1><strong>1.99</strong>s</h1>
            <h3>0-60 mph1</h3>
          </div>
          <div>
            <h1><strong>1,020 </strong>hp</h1>
            <h3>Peak Power</h3>
          </div>
        </div>
      </div>

      {/* VEHICLES SECTION */}
      <div className="elect">
        <div className="electric">
          <div className="down" onClick={() => openModal(vehicles[0])}>
            <img src={tooblack} alt="Tesla Model 3" />
          </div>
          <div className="hb">
            <h2><strong>{vehicles[0].description} — starting at ${vehicles[0].price.toLocaleString()}.</strong></h2>
            <button onClick={() => openModal(vehicles[0])}>Order Now</button>
          </div>
        </div>
      </div>

      <div className="electt">
        <div className="electrictt">
          <div className="downtt" onClick={() => openModal(vehicles[1])}>
            <img src={TeslaModelYWrapMilitaryGreen} alt="Tesla Model Y" />
          </div>
          <div>
            <h2><strong>{vehicles[1].description} — starting at ${vehicles[1].price.toLocaleString()}.</strong></h2>
            <button onClick={() => openModal(vehicles[1])}>Order Now</button>
          </div>
        </div>
      </div>

      <div className="redcar">
        <img src={redcar} alt="Tesla Model 3 Standard" onClick={() => openModal(vehicles[2])} />
        <div className="rengg">
          <h2><strong>{vehicles[2].description} — starting at ${vehicles[2].price.toLocaleString()}.</strong></h2>
          <button onClick={() => openModal(vehicles[2])}>Order Now</button>
        </div>
      </div>

      <div className="starting">
        <img src={wits} alt="Tesla Model 3 Wits" onClick={() => openModal(vehicles[3])} />
        <h2>{vehicles[3].description} — starting at ${vehicles[3].price.toLocaleString()}.</h2>
        <button onClick={() => openModal(vehicles[3])}>Order Now</button>
        <h1>Tesla Model</h1>
      </div>

      <div className="somettppp">
        <img src={somet} alt="Tesla Model 3 Somet" onClick={() => openModal(vehicles[4])} />
        <h2>{vehicles[4].description} — starting at ${vehicles[4].price.toLocaleString()}.</h2>
        <button onClick={() => openModal(vehicles[4])}>Order Now</button>
      </div>

      <div className="Autopilot">
        <h3>Autopilot • Long-Range Battery • Fast Charging • Smart Interior • High Performance</h3>
      </div>

      {/* PRODUCT MODAL */}
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
        onAdd={handleAddToCart}
      />
    </div>
    </>
  );
}

export default Ordernow;
