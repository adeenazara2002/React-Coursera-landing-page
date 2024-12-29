import React from "react";

const Card = ({ imageSrc, heading1, text1, heading2, text2 }) => {
  return (
    <div className="card">
      <img class='cardimg' src={imageSrc} alt="Card" />
      <div className="card-content">
        <h3 class='cardheading1'>{heading1}</h3>
        <p class='cardtext1'>{text1}</p>
        <h4 class='cardheading2'>{heading2}</h4>
        <p class='cardtext2'>{text2}</p>
      </div>
    </div>
  );
};

export default Card;
