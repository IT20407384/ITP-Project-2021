import React from "react";
import { Button } from "react-bootstrap";
import Selector from "../partsSelector/partsSelector";
import "./addNewPlan.css";

export default function NewPlan(props) {
  return (
    <div className="newPlanContainer">
      <form className="form-container">
        <div className="planDetails">
          <div className="planID idInForm">
            <label className="planIdLabel idLabel">Plan ID</label>
            <input className="adding" defaultValue="PID001" disabled />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="planTitle"
              placeholder="Plan title"
              required
            />
            <label for="planTitle" className="lab">
              Plan title
            </label>
          </div>
          <div className="selectorCtrl">
            <Selector />
            <input className="quantitySel" type="number" defaultValue="1" />
          </div>
          <br></br>
          <br></br>
          <div class="form-floating">
            <textarea
              class="form-control ta"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
            ></textarea>
            <label className="lab" for="floatingTextarea2">
              Description
            </label>
          </div>
          <div className="bill">
            <label className="invo">INVOICE</label>
            <br></br>
            <div className="allbillLabels">
              <label className="labelBill">AMOUNT</label>
              <label className="labelBill">DISCOUNT</label>
              <label className="labelBill">TOTAL</label>
            </div>
            <div className="allbillInputs">
              <input
                className="inputBill"
                type="number"
                min="0"
                defaultValue="0.00"
                disabled
              />
              <input
                className="inputBill dis"
                type="number"
                placeholder="0.00"
                min="0"
              />
              <input
                className="inputBill"
                type="number"
                defaultValue="0.00"
                disabled
              />
            </div>
          </div>
          <hr className="sep" />
          <div className="btnCon">
            <Button type="reset" className="btns">
              RESET
            </Button>
            <Button className="btns create">CREATE</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
