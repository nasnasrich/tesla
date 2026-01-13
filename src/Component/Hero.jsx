// import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import mail from "../assets/mail.png";
import teslrmodelone from "../assets/teslrmodelone.png";
import React, { useState, useEffect } from "react";
import Nav from "./Nav"



// Slideshow images
import slide1 from "../assets/forget.jpg";
import slide2 from "../assets/forget.jpg";
import slide3 from "../assets/mmm.jpg";

const Hero = () => {
  const slides = [slide1, slide2, slide3];
    const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
<>
<Nav/>
    
    <div className="homee">
      {/* HERO */}

       {/* HERO SECTION */}
             <div
                    className="Vehicc"
                    style={{ backgroundImage: `url(${slides[currentSlide]})` }}
                  >
                    <div className="Vehiclesoneimg">
                      <img src={teslrmodelone} alt="Tesla Icon" className="hero-icon" />
                    </div>

                    <div className="Vehictexx">
                      <h1>Driving the Future of Sustainable Technology</h1>
                      <p>
                        Explore careers, electric vehicles, and innovation initiatives
                        shaping the next generation of energy and mobility.
                      </p>
                      {/* <p>Pure power. Zero emissions. See the new Tesla Models</p> */}
                      <div className="butto">
                        <Link to="/Companyreviews">
                          <button className="bt">Company Reviews</button>
                        </Link>
                        <Link to="/TrackingPage">
                          <button className="btn secondary">Track Order</button>
                        </Link>
                      </div>
                    </div>
                  </div>



    <div className="holdee">
       <section className="mailclass">
         {/* Top Contact */}
         <a href="mailto:teslamodelbrand@gmail.com" className="hero-mail">
         <img src={mail} alt="Mail"  />
         </a>
        </section>
        
        <div className="viewsalaries">
         <h5>View <Link to="/TeslaSalaries">salaries</Link></h5>
        </div>
      </div>

      {/* MAIN GRID */}
      <section className="main-grid">
        {/* CAREERS */}
        <div className="cardd">
          <h2>Careers at Tesla</h2>
          <p>
            Discover roles aligned with your skills and professional goals.
            Join teams shaping sustainable energy, AI, robotics, and
            manufacturing.
          </p>

          <ul>
            <li>Personalized job recommendations</li>
            <li>Apply for engineering, design & operations roles</li>
            <li>Track applications in one dashboard</li>
          </ul>
          
          <div className="btn-secondary">
          <Link to="/Home">
          <button>Explore Careers</button>
          </Link>
          </div>
        </div>

        {/* VEHICLE PURCHASE */}
        <div className="cardd">
          <h2>Purchase a Tesla</h2>
          <p>
            Experience premium electric vehicles built for performance,
            safety, and sustainability.
          </p>

          <ul>
            <li>Model S, 3, X & Y</li>
            <li>Flexible financing options</li>
            <li>Direct online purchase</li>
          </ul>
          
          <div className="btn-secondary">
          <Link to="/Vehicles">
          <button>View Models</button>
          </Link>
          </div>
        </div>

        {/* INNOVATION & REWARDS */}
        <div className="cardd highlight">
          <h2>Technology & Innovation Rewards</h2>
          <p>
            A public initiative recognizing innovation-driven impact in
            electric vehicles, clean energy, and advanced technology.
          </p>

          <ul>
            <li>EV Innovation Rewards Program</li>
            <li>Recognition for breakthrough ideas</li>
            <li>Financial support & advancement opportunities</li>
          </ul>

          <div className="btn-secondary">
          <Link to="/Offer">
          <button>View Available Offers</button>
          </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="footer">
      <footer>
        <p>
          Inspired by innovation-led enterprises and the global impact of
          Elon Musk–driven technology.
        </p>
      </footer>
      </div>
    </div>
    </>
  );
};

export default Hero;
