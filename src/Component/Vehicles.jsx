import React, { useState, useEffect } from "react";
import "./Vehicles.css";
import iv from "../assets/iv.png";
import gozie from "../assets/gozie.png";
import { Link } from "react-router-dom";
import ProductModal from '../Component/ProductModal';

// CART
import { useCart } from "../context/CartContext";

// Vehicle images
import aa from "../assets/aa.jpg";
import ak from "../assets/ak.jpg";
import mk from "../assets/mk.jpg";
import oku from "../assets/oku.jpg";
import rd from "../assets/rd.jpg";
import wtk from "../assets/wtk.jpg";

// Slideshow images
import slide1 from "../assets/cvie.jpg";
import slide2 from "../assets/ctt.jpg";
import slide3 from "../assets/mmm.jpg";

function Vehicles() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const { addToCart } = useCart();
  const [cartAlert, setCartAlert] = useState("");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartAlert(`Added ${product.name} to your cart`);
    setTimeout(() => setCartAlert(""), 2500);
  };

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Vehicle data
  const vehicles = [
    {
      id: "model-y",
      name: "Tesla Model Y",
      price: 85000,
      image: aa,
      description: "Experience the ultimate electric driving with Tesla Model Y",
      range: 330,
      topSpeed: 155,
      colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red']
    },
    {
      id: "model-s",
      name: "Tesla Model S",
      price: 110000,
      image: ak,
      description: "Luxury and performance combined in Tesla Model S",
      range: 396,
      topSpeed: 155,
      colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red']
    },
    {
      id: "model-x",
      name: "Tesla Model X",
      price: 120000,
      image: mk,
      description: "Tesla Model X - the ultimate electric SUV experience",
      range: 360,
      topSpeed: 155,
      colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red']
    },
    {
      id: "model-3",
      name: "Tesla Model 3",
      price: 65000,
      image: oku,
      description: "Affordable electric performance with Tesla Model 3",
      range: 358,
      topSpeed: 140,
      colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red']
    },
    {
      id: "model-s-plaid",
      name: "Model S Plaid",
      price: 135000,
      image: rd,
      description: "Extreme performance in Tesla Model S Plaid",
      range: 390,
      topSpeed: 200,
      colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red']
    },
    {
      id: "Model-Y-LR",
      name: "Tesla Model Y LR",
      price: 145000,
      image: wtk,
      description: "High-performance SUV with Tesla Model X Plaid",
      range: 340,
      topSpeed: 163,
      colors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red']
    }
  ];

  return (
    <div>
      {/* Cart Alert */}
      {cartAlert && <div className="cart-alert">{cartAlert}</div>}

      {/* HERO SECTION */}
      <div
        className="Vehic"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      >
        <div className="Vehiclesoneimg">
          <img src={iv} alt="Tesla Icon" className="vehicle-icon" />
        </div>
        <div className="Vehictex">
          <h1>Electric Vehicles, Reinvented</h1>
          <p>
            Step into a world of smart engineering and powerful innovation—welcome
            to the Tesla Model range
          </p>
          <p>Pure power. Zero emissions. See the new Tesla Models</p>
          <div className="butto">
            <Link to="/Ordernow">
              <button className="btn">Order Now</button>
            </Link>
            <Link to="/WomenCategory">
              <button className="btn secondary">View Inventory</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="Vehicmoveline">
        <hr />
      </div>

      {/* HEADER */}
      <div className="Vehicmove">
        <Link to="/Hero">
          <img src={gozie} alt="Tesla Icon" style={{ width: 100 }} />
        </Link>
        <h1>
          <strong>Best Car Rankings</strong>
        </h1>
      </div>









      {/* VEHICLE CARDS */}
      <div className="Vehicmovetrbcon">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="Vehicmovetrb">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              width={100}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setModalProduct(vehicle);
                setModalOpen(true);
              }}
            />
            <h1>{vehicle.name} #Tesla</h1>
            <h5>Purchase Price ~ ${vehicle.price.toLocaleString()}</h5>
            <Link to="/Companyreviews">
              <button>Learn</button>
            </Link>
            <button onClick={() => handleAddToCart(vehicle)}>Add to cart</button>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {modalProduct && (
        <ProductModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          product={modalProduct}
          onAdd={(product) => handleAddToCart(product)}
        />
      )}

      {/* MARQUEE */}
      <div className="mar">
        <marquee>
          Built to transform the future of transportation, Teslamode electric
          vehicles integrate state-of-the-art battery technology, long-range
          efficiency, autonomous driving capabilities, and intelligent software
          updates.
        </marquee>
      </div>
    </div>
  );
}

export default Vehicles;
