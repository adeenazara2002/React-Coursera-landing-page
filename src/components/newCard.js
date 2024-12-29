import React from "react";

const NewCard = ({ newimageSrc, iconSrc, mainText, subText, footerText}) => {
  return (
    <div className="newcard">
      <img class='newcardimg'src={newimageSrc} alt="Card"  />
      <div className="card-content">
      <img class='icon'src={iconSrc} alt="icon" className="google" />
        <h3 class='newmainText'>{mainText}</h3>
        <p class='newsubText'>{subText}</p>
        <h4 class='newfooterText'>{footerText}</h4>
      </div>
    </div>
  );
};

export default NewCard;
