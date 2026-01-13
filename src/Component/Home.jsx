import React, { useState } from "react";
import "./Home.css";
import nae from "../assets/nae.png";
import oldpickmon from "../assets/oldpickmon.png";
import badvide from "../assets/badvide.mp4";
import { Link } from "react-router-dom";
import Nav from "./Nav";



{/* Opportunities We’re Showcasing */}
import program from "../assets/program.jpg";
import ussa from "../assets/ussa.jpg";
import dsd from "../assets/dsd.jpg";
import cellteam from "../assets/cellteam.jpg";
import hii from "../assets/hii.jpg"

// Working at Tesla
import te from "../assets/te.png";


import works from "../assets/works.jpg";

        // video
 import videoll from "../assets/videoll.mp4";

    //Tesla participates 
 import iv from "../assets/iv.png";




function Home() {
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message:", message);
    console.log("Checkbox checked?", checked);
  };

  return (
     <>
    <Nav/>
  <div className="homepage">
   <div className="hero-container">
  <video className="hero-bg-video" autoPlay loop muted playsInline>
    <source src={badvide} type="video/mp4"/>
  </video>
   
   <div className='VehiclesoneA'>
      <img src={nae} alt="Tesla Icon" className='vehicle-con' />
    </div>
  <div className="fersthero">
    <form id="myForm" onSubmit={handleSubmit}>
      <div className="insideindexA">
        <h2>Your Impact Starts Here</h2>
        <p>
          Bring your passion, your skills, and your ideas-and help build what
          comes next.
        </p>

        <input
          type="text"
          placeholder="Send a short message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" onClick={() => alert("message sent!")}>
          Submit
        </button>
         {/* <div className="aiworks">      
        <img src={aiworks} alt="Tesla Icon"/>
        </div>  */}
      </div>
         <div className="aiworks">      
        <img src={oldpickmon} alt="Tesla Icon"/>
        </div> 
    </form>
  
  </div>
  {/* <div className="aiworks">      
        <img src={aiworks} alt="Tesla Icon"/>
        </div>   */}
</div>


    {/* apply  */}
  
      <div className="Applyform">
        
        <div className="ApplyA">
          <p>The Elon Musk Employment Scheme is now accepting job applications from dedicated and ambitious individuals who are ready to join a forward-driven team, contribute to innovative projects, and build a meaningful career in a fast-growing global workforce. Interested in this position? Click the button below to apply for the job and submit your details for review</p>
           <Link to="/Formemployment"><button>Apply Now</button></Link>
          
        </div>
         <div className="ApplyB">
          <input type="text" placeholder="Search..."/>
           <p>Solve the next generation of engineering, manufacturing and operational challenges as we work to secure a clean energy future.</p>
         </div>
      </div>


           {/* Opportunities We’re Showcasing */}
         <div className="SHowH1">
          <h1>Opportunities We’re Showcasing</h1>
          </div>

      <div className="Showcasing">
        <div className="ShowcasingA">
          <div className="TeasA">
            <img src={program} alt="Tesla Icon"/>
            <h4>Manufacturing</h4>
            {/* <p>Join a global team of expert engineers, production workers and safety professionals building some of the most exciting vehicles on the planet.</p> */}
            <h1><Link to="/Companyreviews"> See Opportunities </Link></h1>
          </div>

          <div className="TeasB">
            <img src={ussa} alt="Tesla Icon" />
            <h4>Space Systems</h4>
            {/* <p>Discover the engineering roles that support astronaut missions and explore the opportunities available if you wish to apply.</p> */}
            <h1><Link to="/Companyreviews"> See Opportunities </Link></h1>
          </div>

          <div className="TeasC">
            <img src={dsd} alt="Tesla Icon" />
            <h4>Administration</h4>
            {/* <p>Explore opportunities in Corporate, Administrative, and Support roles, helping drive operations, HR, and business growth.</p> */}
            <h1><Link to="/Companyreviews"> See Opportunities </Link></h1>
          </div>

          <div className="TeasD">
            <img src={cellteam} alt="Tesla Icon" />
            <h4>Cell Team</h4>
            <h1><Link to="/Companyreviews">See Opportunities</Link></h1>
          </div>

          <div className="TeasE" >
            <img src={hii} alt="Tesla Icon" />
            <h4>Autopilot AI</h4>
            {/* <p>Apply cutting-edge research to advance a future of full self-driving, developing some of the world’s most sophisticated decision-making systems.</p> */}
            <h1><Link to="/Companyreviews">See Opportunities</Link></h1>
          </div>
        </div>
</div>  

                          {/* text */}

<div className='Textdad'>
                      <div className='Textme'>
                        <h4>Featured position</h4>
                        <img src={te}  alt="Tesla Icon" style={{ marginTop: 10, width: 110, marginRight: 13, color: "white" }} />
                        Working at Tesla.
                      </div>                     

             <div className='Textmom'>
               <h4><strong>
                 Join a global team of expert engineers, production workers and safety professionals building some of the most exciting vehicles on the planet.
               </strong></h4>
   
               <h4><strong>
                 Discover the engineering roles that support astronaut missions and explore the opportunities available if you wish to apply.
               </strong></h4>
   
               <h4><strong>
                 Explore opportunities in Corporate, Administrative, and Support roles, helping drive operations, HR, and business growth.
               </strong></h4>
   
               <h4><strong>
                  Apply cutting-edge research to advance a future of full self-driving, developing some of the world’s most sophisticated decision-making systems
               </strong></h4>
              </div>
      </div>

             
             
             {/* //Working at Tesla */}
    <div className='WorkingatTesla'>
                      <div className='como'>
                        <h4>Rethink the future</h4>
                        <img src={te}  alt="Tesla Icon" style={{ marginTop: 10, width: 110,  marginRight: 13, color: "white" }} />
                        Working at Tesla.
                      </div>
                     

             <div className='WorkingTesla'>
               <h4><strong>
                 No matter your background, if you’ve done exceptional work, join us to reshape the future of sustainable energy and manufacturing.
               </strong></h4>
   
               <h4><strong>
                 Tesla operates by creating high-performance electric cars powered by innovative battery technology and smart energy solutions.
               </strong></h4>
   
               <h4><strong>
                Tesla works by designing advanced electric vehicles and energy systems that run on clean technology to reduce pollution and improve transportation.
               </strong></h4>
   
               <marquee>
                 The Tesla Model brand represents a groundbreaking evolution in modern transportation, combining advanced electric powertrain engineering, cutting-edge autonomous driving technology, premium safety features, sophisticated interior design, and a bold commitment to sustainability; it stands as a symbol of innovation, efficiency, and environmental responsibility, offering drivers an experience that blends high performance with quiet comfort, seamless connectivity through intelligent software updates, long-range battery capability crafted for everyday travel and long-distance journeys, and a futuristic vision where clean energy, smart mobility, and stylish automotive design come together to redefine what a truly modern vehicle should be, making each Tesla model not just a car, but an advanced technological companion built for the future of driving.
               </marquee>
              </div>
             {/* <div className='Workingim'>
               <img src={works} alt="Tesla Icon" style={{ height: 250 }} />
             </div> */}
      </div>

        

                {/* Student Opportunities */}

       <div className="StudentOpportunities">
        
        <div className="StudentA">
          <h3>Student Opportunities</h3>
          <h4>Tesla interns tackle hands-on projects and design challenges, constantly upending conventions and pushing boundaries. Students may also apply for Tesla START, an immersive 12-week capstone program where undergraduates develop technical expertise and prepare for a job at Tesla or beyond.</h4>
           <Link to="/Formemployment"><button>View Internships</button></Link>
        </div>

        <div className="StudentB">
          <h3>life at tesla</h3>
           <p>We’ve replaced corporate hierarchy and bureaucratic conventions with open communication and a collaborative working environment. By promoting a safe, innovative and inclusive culture, anyone with the talent, energy and focus to solve hard problems has a seat at the table.</p>
        </div>
       </div>

                     {/* video and img*/}
        <div className="videoimg">
          <div>
            <video className="videome" autoPlay loop >
            <source src={videoll} type="video/mp4" />
            </video>
           
          <div className="videomeA">
             <p>Family taking items from trunk of Model Y. </p>
             <p>Benefits and More</p>
             <p>We provide employees and their families benefits like medical, dental, vision coverage, 401(k) and generous paid time off from day one. With flexible scheduling, fitness resources and stock benefits for everyone, we invest in team members to help them do their best work.</p>
           </div>
          </div>

          <div className="videomeB">
            <h2>Our Community</h2>
             <h4>We refuse to do things the way they’ve always been done. Motivated by a collective commitment to a sustainable future, we work to build an inclusive environment in which everyone-regardless of gender, race, religion, age or background-can succeed.</h4>
            </div>
           </div>

             {/* Tesla participates */}
      
           <div className="Teslaparticipates">
            <div className="Teslapart">
             <img src={te}  alt="Tesla Icon" style={{ marginTop: 10, width: 110 }} />
             <p>Tesla participates in the E-Verify Program.</p>
             </div>

            <div className="participates">
             <div className="TeslaA">
               <p>Tesla is an Equal Opportunity employer. All qualified applicants will receive consideration for employment without regard to any factor, including veteran status and disability status, protected by applicable federal, state or local laws. Tesla is also committed to working with and providing reasonable accommodations to individuals with disabilities. Let your recruiter know if you need an accommodation at any point during the interview process.</p>
              </div>

             <div><br/>
              <img src={iv} alt="Tesla Icon" style={{ marginTop: 10, width: 110 }} />
             </div>
            </div >
              <div className="feull"> 
                <h4>Tesla © 2025 privacy & legal vehicle recalls contact news get updates locations learn</h4>
              </div>
          </div>
          
    </div>
    </>
  );
}

export default Home;