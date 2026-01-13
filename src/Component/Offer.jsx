import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import technology from "../assets/technology.png";
import whatsappoffer from "../assets/whatsappoffer.jpg";
import Nav from "./Nav";

import "./Offer.css";

const Offer = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_country: "",
    user_phone: "",
    user_category: "",
    user_amount: "",
    user_description: "",
    user_fundingHelp: "",
  });

  // NEW: loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("aX_i56-Kua_O-QBo9");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // show progress indicator

    console.log("EmailJS Params:", formData);

    emailjs
      .send("service_jjlodic", "template_cj5apoi", formData, "aX_i56-Kua_O-QBo9")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Application submitted successfully! Check your email for confirmation.");

        setFormData({
          user_name: "",
          user_email: "",
          user_country: "",
          user_phone: "",
          user_category: "",
          user_amount: "",
          user_description: "",
          user_fundingHelp: "",
        });

        setLoading(false); // hide progress indicator
      })
      .catch((error) => {
        console.error("FAILED TO SEND:", error);
        alert("Failed to submit application. Check console for details.");
        setLoading(false); // hide progress indicator
      });
  };

  const message = encodeURIComponent(`Hello, I’m interested in the Tesla Technology & Innovation Reward Program. ${formData.user_name}`);

  return (
    <>
    <Nav/>

    <div className="offer-page">
      {/* HERO */}
      <section className="offer-hero">
        <h1>Technology & Innovation Reward Program</h1>
        <div className="offer-hero-text">
          <p>
            Empowering innovators, startups, and creators with financial support
            to build impactful technology-driven solutions.
          </p>
        </div>
      </section>

      <div className="offer-section-title">
        <h2>Innovation Unleashed</h2>
      </div>

      {/* ABOUT */}
      <section className="offer-about">
        <div className="offer-about-content">
          <div className="offer-card">
            <h3>Financial Support</h3>
            <p>
              Selected applicants receive funding grants and innovation rewards
              to accelerate development and deployment.
            </p>
          </div>

          <div className="offer-card">
            <h3>Innovation Driven</h3>
            <p>
              We support ideas in AI, FinTech, Blockchain, HealthTech, Clean Energy,
              and emerging technologies.
            </p>
          </div>

          <div className="offer-card">
            <h3>Growth & Exposure</h3>
            <p>
              Gain access to mentorship, partnerships, and exposure to investors
              and global networks.
            </p>
          </div>
        </div>

        <div className="offer-image">
          <img src={technology} alt="Innovation visual" />
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="offer-eligibility">
        <div className="offer-eligibility-grid">
          <div>
            <h2>Who Can Apply?</h2>
            <p>
              Individual innovators and developers. Startups and early-stage
              companies. Research teams and entrepreneurs. Applicants from all
              countries.
            </p>
          </div>

          <div className="offer-government">
            <h2>Government Grants and Loans</h2>
            <p>
              Governments typically fund organizations rather than individuals,
              but loans and business funding options may be available.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="offer-form-section">
        <div className="offer-form-wrapper">
          <div className="offer-form">
            <h2>Apply for Financial Support</h2>
            <p>Fill out the form below to submit your application.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
              <br /> <br />
              <input
                type="text"
                name="user_country"
                placeholder="Country"
                value={formData.user_country}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                value={formData.user_phone}
                onChange={handleChange}
              />
              <br /> <br />
              <select
                name="user_category"
                value={formData.user_category}
                onChange={handleChange}
                required
              >
                <option value="">Select project category</option>
                <option>FinTech</option>
                <option>Artificial Intelligence</option>
                <option>Blockchain</option>
                <option>Health Technology</option>
                <option>Clean Energy</option>
                <option>AgriTech</option>
                <option>Other</option>
              </select>
              <input
                type="$"
                name="user_amount"
                placeholder="Requested Funding Amount (USD)"
                value={formData.user_amount}
                onChange={handleChange}
              />
              <br /> <br />
              <textarea
                name="user_description"
                placeholder="Briefly describe your innovation or project"
                value={formData.user_description}
                onChange={handleChange}
                required
              />
              <textarea
                name="user_fundingHelp"
                placeholder="How will this funding help your project?"
                value={formData.user_fundingHelp}
                onChange={handleChange}
                required
              />

              {/* NEW: Show loading message */}
              {loading && (
                <p style={{ color: "blue", fontWeight: "bold", marginTop: "10px" }}>
                  Sending your application, please wait...
                </p>
              )}

              <button type="submit" className="offer-submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          <div className="offer-form-image">
            <a
              href={`https://wa.me/+14796524016?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappoffer} alt="Application illustration" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="offer-footer">
        <p>© 2026 Technology & Innovation Reward Program. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Offer;
