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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          nunc sit amet mauris vehicula auctor.
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
