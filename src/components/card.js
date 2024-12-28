import React from "react";

const Card = ({ imageSrc, heading1, text1, heading2, text2 }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h3>{heading1}</h3>
        <p>{text1}</p>
        <h4>{heading2}</h4>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Card;
