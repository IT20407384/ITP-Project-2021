import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Selector from '../partsSelector/partsSelector'
import './planEdit.css'
import axios from 'axios'

export default function EditPlan(props) {
  // Vehicle type selection
  const { id, planId } = useParams()
  const url = '/type/' + id

  return (
    <div className="data" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <h2>Edit Current Plan</h2>
      <h5>Vehicle Type :- {id}</h5>
      <hr />
      <div className="newPlanContainer">
        <form className="form-container">
          <div className="planDetails">
            <div className="planID idInForm">
              <label className="planIdLabel idLabel">Plan ID</label>
              <input className="adding" defaultValue={planId} disabled />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-floating mb-3">
              <input
                type="text"
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
            </div>
            <br></br>
            <br></br>
            <div class="form-floating">
              <textarea
                class="form-control ta"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: '200px' }}
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
              <Link to={url}>
                <Button className="btns">CANCEL</Button>
              </Link>
              <Button className="btns create">UPDATE</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
