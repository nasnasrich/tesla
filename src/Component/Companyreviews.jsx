import './Companyreviews.css';
import iv from "../assets/iv.png";
import twitter from "../assets/twitter.png";
import te from "../assets/te.png";
import works from "../assets/works.jpg";
import { Link } from "react-router-dom";
import { Message } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';   // ✅ added

function Companyreviews() {
  const navigate = useNavigate();                 // ✅ added

  return (
    <div className='companyreviews'>
      <div className='companyre'>
        <h1>Compare Models Review</h1>
        <p>Discover which Tesla models meet your needs by answering questions about your budget, driving habits and lifestyle.</p>
        <Link to="/Hero">
        {/* <img src={te} alt="Tesla Icon" style={{width: 140 }} /> */}
        </Link>

        <Link to="/Vehicles">
        <button style={{boxShadow: "1px 1px 1px 2px rgba(19, 19, 253, 0.2), inset 0 0 5px rgba(10, 26, 143, 0.22)"}}>
          Help me choose
        </button>
        </Link>
      </div>

      <div className='companyreA'>
        <div className='comA'>
          <Link to="/Hero">
          <img src={iv} alt="Tesla Icon" style={{ marginTop: 10, width: 110 }} />
          </Link>
        </div>

        <div className='dispal'>
          <div className='dispalchideA'>
            <h4><strong>
              Tesla’s electric sedan blends luxury, performance, and safety, offering autopilot features, a long-range battery, and innovative technology for a next-level driving experience.
            </strong></h4>

            <h4><strong>
              Designed for speed, comfort, and cutting-edge safety, Tesla’s all-electric sedan comes equipped with autopilot and a long-lasting battery, setting a new benchmark in modern vehicles.
            </strong></h4>

            <h4><strong>
              With advanced technology, autopilot capabilities, and a long-range battery, Tesla’s all-electric sedan delivers unmatched performance, luxury, and safety for today’s drivers.
            </strong></h4>

            <marquee>
              The Tesla Model brand represents a groundbreaking evolution in modern transportation, combining advanced electric powertrain engineering, cutting-edge autonomous driving technology, premium safety features, sophisticated interior design, and a bold commitment to sustainability; it stands as a symbol of innovation, efficiency, and environmental responsibility, offering drivers an experience that blends high performance with quiet comfort, seamless connectivity through intelligent software updates, long-range battery capability crafted for everyday travel and long-distance journeys, and a futuristic vision where clean energy, smart mobility, and stylish automotive design come together to redefine what a truly modern vehicle should be, making each Tesla model not just a car, but an advanced technological companion built for the future of driving.
            </marquee>
          </div>

          <div className='dispalchideB'>
            <img src={works} alt="Tesla Icon" style={{ height: 250 }} />
          </div>
        </div>

        <div className='formdad'>
             <div className='reviews'>
              <p>No reviews yet. Be the first to share your thoughts!</p>
             </div>
            
          <div className='form'>
            {/* <br/> */}
            <input type="text" placeholder='message...' />

            <button onClick={() => {
              alert('message sent!');
              navigate('/Hero');            // ✅ now works
            }}>
              Submit
            </button>
             <a href='https://x.com/teslamodelbrand'>
            <img src={twitter} alt="Tesla Icon" />
            </a>
          </div>

          <div>
            <p>1 Prices listed do not include Destination and Order Fees, taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Prices including the Destination and Order fees but excluding taxes and other fees are as follows:</p>
            <p>Model Y Standard Rear-Wheel Drive starts at $41,630, Model Y Premium Rear-Wheel Drive starts at $46,630, Model Y Premium All-Wheel Drive starts at $50,630 and Model Y Performance All-Wheel Drive starts at $59,130.</p>
            <p>Model 3 Standard Rear-Wheel Drive starts at $38,630, Model 3 Premium Rear-Wheel Drive starts at $44,130, Model 3 Premium All-Wheel Drive starts at $49,130, Model 3 Performance All-Wheel Drive starts at $56,630,</p>
            <p>Model S Plaid starts at $101,630, Model S AWD starts at $86,630, Model X Plaid starts at $106,630, Model X AWD starts at $91,630, Cyberbeast starts at $117,235 and Cybertruck All-Wheel Drive starts at $82,235. Terms apply.</p>
            <p>2 With rollout subtracted. When equipped with paid hardware upgrades.</p>
          </div>
        </div>

        <div className='feter'>
          <p>Autopilot • Long-Range Battery • Fast Charging • Smart Interior • High Performance</p>
        </div>
      </div>
    </div>
  );
}

export default Companyreviews;
