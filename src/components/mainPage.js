import React from "react";
import "./MainPage.css";
import CourseraLearning from "../Images/CourseraLearners.png"; 

const MainBody = () => {
  return (
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
  );
};

export default MainBody;
