import React from "react";
import "./planCard.css";
import "./flipCard.css";
import { useParams } from "react-router-dom";

export default function PlanCardBack(props) {
  const { id } = useParams();
  const url = "/editPlan/" + id;

  return (
    <div>
      <div className="container">
        <h3 className="cardTitle">Engine TuneUP</h3>
        <hr className="cardHR" />
      </div>
      <div className="planID">
        <label>Plan ID</label>
        <input defaultValue="PID001" disabled />
        <br></br>
        <h1>Description</h1>
      </div>
      <div className="planDetails description">
        <p>
          example example example example example example example example
          example example example example example example example example
          example example example example example example example example
          example example example example example example example example
        </p>
      </div>
    </div>
  );
}
