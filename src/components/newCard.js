import React from "react";

const NewCard = ({ newimageSrc, mainText, subText, footerText }) => {
  return (
    <div className="newcard">
      <img className="newcardimg" src={newimageSrc} alt="Card" />
      <div className="card-content">
        <h3 className="newmainText">{mainText}</h3>
        <p className="newsubText">{subText}</p>
        <h4 className="newfooterText">{footerText}</h4>
      </div>
    </div>
  );
};

export default NewCard;
