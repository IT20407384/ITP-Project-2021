import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tabs } from 'react-bootstrap'
import './Tabs.css'
import ScheduleTable from '../ScheduleTable/ScheduledTable'
import newPlan from '../addNewMaintenancePlans/newPlan'
import CardFliper from '../PlanCards/cardFlipper'
import axios from 'axios'

export default function Tab() {
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

  // Vehicle type selection
  const { id } = useParams()
  // Vehicle type selection close

  return (
    <div className="data">
      <Tabs
        defaultActiveKey="scheduled"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="scheduled" title="SCHEDULED">
          <h2>Arrived Schedules</h2>
          <h5>Vehicle Type :- {id}</h5>
          <hr />
          <ScheduleTable />
        </Tab>
        <Tab eventKey="createdPlans" title="CREATED PLANS">
          <h2>Created Plans</h2>
          <h5>Vehicle Type :- {id}</h5>
          <hr />
          <div className="cardLinner">
            {details.map((details) => (
              <CardFliper details={details} />
            ))}
          </div>
        </Tab>
        <Tab eventKey="addPlans" title="NEW PLAN">
          <h2>Create a New Plan</h2>
          <h5>Vehicle Type :- {id}</h5>
          <hr />
          {newPlan()}
        </Tab>
      </Tabs>
    </div>
  )
}
