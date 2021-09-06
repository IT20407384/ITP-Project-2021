import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Selector from '../partsSelector/partsSelector'
import './addNewPlan.css'
import axios from 'axios'

export default function NewPlan(props) {
  // Get details to card from database
  const [details, setDetails] = useState([])

  useEffect(() => {
    function getDetails() {
      axios
        .get('http://localhost:3001/api/maintenance/all')
        .then((res) => {
          setDetails(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getDetails()
  }, [])

  // generateplanID;
  const len = details.length
  const gen = len + 1
  const planID = 'PID00' + gen

  // Get amounts from all selected spare-parts
  const AMOUNT = '10000.00'

  // Set states
  const [planName, setPtitle] = useState('')
  const [planDescription, setPdescription] = useState('')
  const [amount] = useState(AMOUNT)
  const [discount, setdiscount] = useState(0)
  const [total, settotal] = useState('')

  // Calculation of total from Amount - Discount
  function calcTot(disc) {
    setdiscount(disc)
    const tot = amount - disc
    settotal(tot)
  }

  const totChange = () => {
    if (discount == 0) {
      settotal(AMOUNT)
    }
  }

  // get selected spare-parts
  var [spareParts, setValue] = useState()

  // Send data
  function sendData(e) {
    e.preventDefault()

    const newPlanContent = {
      planID,
      planName,
      spareParts,
      planDescription,
      amount,
      discount,
      total,
    }

    axios
      .post('http://localhost:3001/api/maintenance/add', newPlanContent)
      .then(() => {
        alert('New Plan added')
      })
      .catch((err) => {
        console.log(err)
      })

    console.log(newPlanContent)
  }

  return (
    <div className="newPlanContainer">
      <form className="form-container" onSubmit={sendData}>
        <div className="planDetails">
          <div className="planID idInForm">
            <label className="planIdLabel idLabel">Plan ID</label>
            <input className="adding" value={planID} disabled />
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
              onChange={(e) => {
                setPtitle(e.target.value)
              }}
            />
            <label for="planTitle" className="lab">
              Plan title
            </label>
          </div>
          <div className="selectorCtrl">
            <Selector
              getValue={(e) => {
                setValue(e.map((id) => id))
              }}
            />
          </div>
          <br></br>
          <br></br>
          <div class="form-floating">
            <textarea
              class="form-control ta"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: '200px' }}
              onChange={(e) => {
                setPdescription(e.target.value)
              }}
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
                type="text"
                min="0"
                defaultValue={AMOUNT}
                disabled
              />
              <input
                className="inputBill dis"
                type="text"
                placeholder="0.00"
                min="0"
                onChange={(e) => {
                  calcTot(e.target.value)
                }}
              />
              <input
                className="inputBill"
                type="text"
                defaultValue={total}
                placeholder={AMOUNT}
                disabled
              />
            </div>
          </div>
          <hr className="sep" />
          <div className="btnCon">
            <Button type="reset" className="btns">
              RESET
            </Button>
            <Button type="submit" className="btns create" onClick={totChange}>
              CREATE
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
