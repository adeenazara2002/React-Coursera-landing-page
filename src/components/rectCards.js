import React from "react";

const RectCard = ({ rectImg, rectText, rectDesc }) => {
  return (
    <div className="rectcard">
      {/* Left: Image */}
      <div className="rectcard-image">
        <img src={rectImg} alt="img" />
      </div>
      {/* Right: Text */}
      <div className="rectcard-content">
        <h3 className="rectcard-title">{rectText}</h3>
        <p className="rectcard-description">{rectDesc}</p>
      </div>
    </div>
  );
};

export default RectCard;
