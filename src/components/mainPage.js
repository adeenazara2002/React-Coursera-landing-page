import React from "react";
import "./MainPage.css";
import CourseraLearning from "../Images/CourseraLearners.png"; 
import Logo1 from "../Images/illinois.png"; 
import Logo2 from "../Images/duke.png";
import Logo3 from "../Images/google.png";
import Logo4 from "../Images/imperial.png";
import Logo5 from "../Images/umich.png";
import Logo6 from "../Images/stanford.png";
import Logo7 from "../Images/penn.png";
import Logo8 from "../Images/ibm.png";


const MainBody = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="main-body">
        {/* Left Section */}
        <div className="left-section">
          <h1>Learn without <br></br>limits</h1>
          <p>
            Professional Certificates, and degrees from world-class universities<br></br>
            Start, switch, or advance your career with more than 10,000 courses,<br></br>
            and companies
          </p>
          <div className="buttons">
            <button className="join-btn">Join for Free</button>
            <button className="business-btn">Try Coursera for Business</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <img
            src={CourseraLearning}
            alt="Learning Illustration"
            className="right-image"
          />
        </div>
      </div>

      {/* Light Grey Section */}
      <div className="light-grey-section">
        <p className="grey-section-text">
          We collaborate with 350+ leading universities worldwide
        </p>
        <div className="logo-row">
          <img src={Logo1} alt="Logo 1" className="logo" />
          <img src={Logo2} alt="Logo 2" className="logo" />
          <img src={Logo3} alt="Logo 3" className="logo" />
          <img src={Logo4} alt="Logo 4" className="logo" />
          <img src={Logo5} alt="Logo 5" className="logo" />
          <img src={Logo6} alt="Logo 6" className="logo" />
          <img src={Logo7} alt="Logo 7" className="logo" />
          <img src={Logo8} alt="Logo 8" className="logo" />

        </div>
      </div>
    </div>
  );
};

export default MainBody;
