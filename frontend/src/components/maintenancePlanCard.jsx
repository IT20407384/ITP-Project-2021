import React from "react";
import "../css/planCard.css";

export default function PlanCard(props) {
  return (
    <div className="cardWrapper">
      <div className="container">
        <h3 className="cardTitle">Engine TuneUP</h3>
        <hr className="cardHR" />
      </div>
      <div className="planID">
        <label>Plan ID</label>
        <input defaultValue="PID001" disabled />
      </div>
      <div className="planDetails">
        <label>Spare Parts</label>
        <ul title="Spare Parts">
          <li>spark plugs</li>
          <li>spark plug wires</li>
          <li>distributor caps</li>
          <li>fuel filters</li>
          <li>air filters</li>
          <li>oil filters</li>
        </ul>
      </div>
    </div>
  );
}
