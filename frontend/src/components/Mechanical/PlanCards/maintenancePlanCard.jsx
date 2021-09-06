import React, { useState, useEffect } from 'react'
import './planCard.css'
import './flipCard.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function PlanCard({ details }) {
  //get vehicle type from url
  const { id } = useParams()
  const url = '/editPlan/' + id + '/'

  // props assign
  const data = [details]

  return (
    <div>
      {
        <div>
          <div className="container">
            {data.map((data) => (
              <h3 className="cardTitle">{data.planName}</h3>
            ))}

            <hr className="cardHR" />
          </div>
          <div className="planID">
            <label>Plan ID</label>
            {data.map((data) => (
              <input defaultValue={data.planID} disabled />
            ))}
          </div>

          <div className="planDetails">
            <label className="detailName">Spare Parts</label>

            <ul className="spares" title="Spare Parts">
              {data.map((data) =>
                data.spareParts.map((sp) => <li>{sp.Country}</li>),
              )}
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
              {data.map((data) => (
                <Link to={url + data.planID}>
                  <Button className="btnEdit">EDIT</Button>
                </Link>
              ))}

              <Button className="btnDelete">DELETE</Button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
