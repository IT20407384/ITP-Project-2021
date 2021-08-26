import PlanCard from "./maintenancePlanCard";
import React, { useState } from "react";
import "./planCard.css";
import "./flipCard.css";
import PlanCardBack from "./maintenancePlanCardBack";

export default function CardFliper() {
  //flip card
  const [flip, setFlip] = useState(true);

  function fliper() {
    setFlip(!flip);
  }

  let flipping = flip ? "cardWrapper1" : "cardWrapper2";

  return (
    <div onClick={fliper} className={flipping}>
      <div className="flip-card-front">
        <PlanCard />
      </div>
      <div className="flip-card-back">
        <PlanCardBack />
      </div>
    </div>
  );
}
