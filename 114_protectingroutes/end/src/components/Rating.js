import React from "react";

const Rating = ({ score }) => {
  return (
    <div className="rating">
      {Array.from(Array(score), (_, index) => (
        <div className="star" key={index} />
      ))}
    </div>
  );
};

export default Rating;
