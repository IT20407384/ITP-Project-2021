import React, { useState, useEffect } from "react";
import "./planCard.css";
import "./flipCard.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function PlanCard(props) {
  //get vehicle type from url
  const { id } = useParams();
  const url = "/editPlan/" + id;

  // Get details to card from database
  const [details, setDetails] = useState([]);

  useEffect(() => {
    function getDetails() {
      axios.get("http://localhost:3001/api/maintenance/all").then(res => {
        console.log(res.data);
      });
    }
    getDetails();
  });

  return (
    <div>
      <div className="container">
        <h3 className="cardTitle">Engine TuneUP</h3>
        <hr className="cardHR" />
      </div>
      <div className="planID">
        <label>Plan ID</label>
        <input defaultValue="PID001" disabled />
      </div>
      <div className="planDetails">
        <label className="detailName">Spare Parts</label>
        <ul title="Spare Parts">
          <li>spark plugs</li>
          <li>spark plug wires</li>
          <li>distributor caps</li>
          <li>fuel filters</li>
          <li>air filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
          <li>oil filters</li>
        </ul>
        <div className="quotation">
          <label className="detailName QuotateLabel">Quotation</label>
          <label className="quoteDetails amount">Amount</label>
          <input
            className="billInputs"
            type="text"
            disabled
            defaultValue="10000.00"
          />
          <br></br>
          <label className="quoteDetails dis">Discount</label>
          <input
            className="billInputs dis"
            type="text"
            disabled
            defaultValue="1000.00"
          />
          <br></br>
          <label className="quoteDetails Ltot">Total</label>
          <input
            className="billInputs tot"
            type="text"
            disabled
            defaultValue="9000.00"
          />
        </div>
        <div className="cardBtnControl">
          <Link to={url}>
            <Button className="btnEdit">EDIT</Button>
          </Link>
          <Button className="btnDelete">DELETE</Button>
        </div>
      </div>
    </div>
  );
}
