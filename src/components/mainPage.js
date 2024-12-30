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
import Card from "./card";
import NewCard from "./newCard";
import RectCard from "./rectCards";
import CardImage1 from "../Images/person1.png";
import CardImage2 from "../Images/person2.png";
import CardImage3 from "../Images/person3.png";
import NewCardImage1 from "../Images/ashley.png";
import NewCardImage2 from "../Images/hanbury.png";
import NewCardImage3 from "../Images/karrim.png";
import NewCardImage4 from "../Images/gcc.png";
import NewnewCardImage1 from "../Images/python.png";
import NewnewCardImage2 from "../Images/bba.png";
import NewnewCardImage3 from "../Images/excelPersons.png";
import NewnewCardImage4 from "../Images/xbox.png";
import RectCardImage1 from "../Images/data_science.png";
import RectCardImage2 from "../Images/business.png";
import RectCardImage3 from "../Images/computer_science.png";
import RectCardImage4 from "../Images/health.png";
import RectCardImage5 from "../Images/information_technology.png";
import RectCardImage6 from "../Images/language_learning.png";
import RectCardImage7 from "../Images/math_and_logic.png";
import RectCardImage8 from "../Images/arts_and_humanities.png";
import BlueLeftChildImage from "../Images/outcomes.png";
import CircularImg1 from "../Images/kenia.png";
import CircularImg2 from "../Images/ryan.png";
import CircularImg3 from "../Images/vishal.png";

const MainBody = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="main-body">
        {/* Left Section */}
        <div className="left-section">
          <h1>
            Learn without <br />
            limits
          </h1>
          <p>
            Professional Certificates, and degrees from world-class universities
            <br />
            Start, switch, or advance your career with more than 10,000 courses,
            <br />
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

      <div className="blue-section">
        <div className="leftsection">
          <h2 className="choose">
            Choose
            <br />
            your role
          </h2>
          <p className="chooseText">
            Gain the knowledge and
            <br />
            skills you need to advance.
          </p>
          <button className="joinBtn">Explore all roles</button>
        </div>
        <div className="rightsection">
          <button className="beginner">Beginner</button>
          <span className="span">|</span>
          <button className="popular">Popular</button>
          <button className="soft">Software Engineering and IT</button>
          <button className="business">Business</button>
          <button className="sales">Sales & Marketing</button>
          <button className="data">Data Science & Analytics</button>

          {/* Cards Section */}
          <div className="cards-section">
            <Card
              imageSrc={CardImage1}
              heading1="Learn Programming"
              text1="Enhance your coding skills with our expert-led courses."
              heading2="Get Certified"
              text2="Gain industry-recognized certifications to boost your career."
            />
            <Card
              imageSrc={CardImage2}
              heading1="Learn Programming"
              text1="Enhance your coding skills with our expert-led courses."
              heading2="Get Certified"
              text2="Gain industry-recognized certifications to boost your career."
            />
            <Card
              imageSrc={CardImage3}
              heading1="Explore Design"
              text1="Dive into creative design and improve your portfolio."
              heading2="Career Growth"
              text2="Advance your career with design thinking methodologies."
            />
          </div>
        </div>
      </div>

      {/* New Text Section */}
      <div className="text-section">
        <p className="spec">Specializations and Professional Certificates</p>
        <p className="most">Most Popular Certificates</p>
        <p className="explore">
          Explore our most popular programs, get job-ready for an in-demand
          career.
        </p>

        {/* New Cards Section */}
        <div className="new-cardssection">
          <NewCard
            newimageSrc={NewCardImage1}
            // iconSrc={google}
            mainText="Google Certification"
            subText="Master the skills required for a Google-recognized career."
            footerText="Build your professional portfolio with Google."
          />
          <NewCard
            newimageSrc={NewCardImage2}
            // iconSrc={google}
            mainText="Google Cloud"
            subText="Become a certified Google Cloud expert."
            footerText="Gain cloud computing expertise."
          />
          <NewCard
            newimageSrc={NewCardImage3}
            // iconSrc={google}
            mainText="Google Analytics"
            subText="Learn analytics to track and grow your business."
            footerText="Advance your digital marketing skills."
          />

          <NewCard
            newimageSrc={NewCardImage4}
            // iconSrc={google}
            mainText="Google Analytics"
            subText="Learn analytics to track and grow your business."
            footerText="Advance your digital marketing skills."
          />
        </div>
      </div>

      {/* Two Buttons  */}

      <div className="buttons-container">
        <button className="blue-btn">Show 8 More</button>
        <button className="outline-btn">
          View All
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="text-section">
        <p className="spec">Course and Professional Certificates</p>
        <p className="most">New on Coursera</p>
        <p className="explore">
          Explore our newest programs, focused on delivering in-demand skills.
        </p>
      </div>

      {/* New new Cards Section */}
      <div className="new-cardssection">
        <NewCard
          newimageSrc={NewnewCardImage1}
          // iconSrc={google}
          mainText="Python Certification"
          subText="Master the skills required for a Python-recognized career."
        />
        <NewCard
          newimageSrc={NewnewCardImage2}
          // iconSrc={google}
          mainText="Google Cloud"
          subText="Become a certified Google Cloud expert."
        />
        <NewCard
          newimageSrc={NewnewCardImage3}
          // iconSrc={google}
          mainText="Excel"
          subText="Learn analytics to track and grow your business."
        />

        <NewCard
          newimageSrc={NewnewCardImage4}
          // iconSrc={google}
          mainText="Xbox"
          subText="Learn analytics to track and grow your business."
        />
      </div>
      {/* Two Buttons  */}

      <div className="buttons-container">
        <button className="blue-btn">Show More</button>
        <button className="outline-btn">
          View All
          <span className="arrow">→</span>
        </button>
      </div>
      <div class="bottomTextDiv">
        <p class="bottomText">
          Each university determines admission and the number of pre-approved
          prior learning credits that may count toward the degree requirements
          according to institutional policies, which may consider any existing
          credits you may have.
        </p>
      </div>

      <div class="explore">
        <p class="explorecoursera">Explore Coursera</p>
      </div>

      {/* Rectangular Cards Section */}
      <div className="rectcards-section">
        <div className="rectcards-container">
          <RectCard
            rectImg={RectCardImage1}
            rectText="Data Science"
            rectDesc="Learn data analysis and visualization."
          />
          <RectCard
            rectImg={RectCardImage2}
            rectText="Web Development"
            rectDesc="Master frontend and backend development."
          />
          <RectCard
            rectImg={RectCardImage3}
            rectText="Machine Learning"
            rectDesc="Dive into AI and machine learning techniques."
          />
          <RectCard
            rectImg={RectCardImage4}
            rectText="Digital Marketing"
            rectDesc="Enhance your marketing strategies."
          />
        </div>
      </div>

      <div className="rectcards-section">
        <div className="rectcards-container">
          <RectCard
            rectImg={RectCardImage5}
            rectText="Data Science"
            rectDesc="Learn data analysis and visualization."
          />
          <RectCard
            rectImg={RectCardImage6}
            rectText="Web Development"
            rectDesc="Master frontend and backend development."
          />
          <RectCard
            rectImg={RectCardImage7}
            rectText="Machine Learning"
            rectDesc="Dive into AI and machine learning techniques."
          />
          <RectCard
            rectImg={RectCardImage8}
            rectText="Digital Marketing"
            rectDesc="Enhance your marketing strategies."
          />
        </div>
      </div>
      {/* Blue Parent Section */}

      <div className="blueParentDiv">
        <div className="blueLeftChild">
          <img class="blueleftchildimg" src={BlueLeftChildImage} alt="img" />
        </div>
        <div className="blueRightChild">
          {/* Add content for the right child here */}
          <p class="learners">Learner outcomes on Coursera</p>
          <p class="learnersreport">
            <span class="learnersreportspan">
              77% of learners report career benefits,
            </span>{" "}
            such as new<br></br>skills, increased pay, and new job
            opportunities. 2023<br></br>
            <a href="#">Coursera Learner Outcomes Report</a>
          </p>
          <button className="joinBtn blueparentbtn">Join for free</button>
        </div>
      </div>

      {/* below blue parent text section */}

      <div class="belowBlueParentTextDiv">
        <p class="belowBlueParentTextP1">From the Coursera community</p>
        <p class="belowBlueParentTextP2">
          162+ million people have already joined Coursera
        </p>
      </div>
      {/* Coursera Community  section */}

      <div class="courseraCommunitySection">
        <div class="courseraCommunitySubSection">
          <div class="circularimg">
            <img src={CircularImg1} alt="img" />
          </div>
          <p class='courseraCommunitySectionP1'>Kenia R.</p>
          <p class='courseraCommunitySectionP2'>United States</p>
          <div class='courseracommunityline'></div>
          <p class='courseraCommunitySectionP3'>“From taking courses on<br></br> Coursera, I gained a deep<br></br> understanding of the UX Design <br></br>process from start to finish. With<br></br> the knowledge I gained, I feel<br></br> prepared for entry-level jobs<br></br> and internships. I've been able<br></br> to apply the skills and<br></br> knowledge I gained to multiple <br></br>projects and work experiences.”</p>
        </div>

        <div class="courseraCommunitySubSection">
          <div class="circularimg">
            <img src={CircularImg2} alt="img" />
          </div>
          <p class='courseraCommunitySectionP1'>Ryan L.</p>
          <p class='courseraCommunitySectionP2'>United States</p>
          <div class='courseracommunityline'></div>
          <p class='courseraCommunitySectionP3'>“From taking courses on<br></br> Coursera, I gained a deep<br></br> understanding of the UX Design<br></br> process from start to finish. With<br></br> the knowledge I gained, I feel<br></br> prepared for entry-level jobs<br></br> and internships. I've been able<br></br> to apply the skills and <br></br>knowledge I gained to multiple<br></br> projects and work experiences.”</p>
        </div>

        <div class="courseraCommunitySubSection">
          <div class="circularimg">
            <img src={CircularImg3} alt="img" />
          </div>
          <p class='courseraCommunitySectionP1'>Vishal V.</p>
          <p class='courseraCommunitySectionP2'>India</p>
          <div class='courseracommunityline'></div>
          <p class='courseraCommunitySectionP3'>“I really enjoyed my courses.<br></br> The quizzes, videos, and quick<br></br> labs provided helpful hands-on <br></br>experience. Learning on<br></br> Coursera has given me the <br></br>confidence and ability to excel<br></br> in my career. I love this feeling.”</p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
