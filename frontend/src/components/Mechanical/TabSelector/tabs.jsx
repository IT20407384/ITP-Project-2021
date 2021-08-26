import { useParams } from "react-router-dom";
import { Tabs } from "react-bootstrap";
import "./Tabs.css";
import PlanCard from "../PlanCards/maintenancePlanCard";
import ScheduleTable from "../ScheduleTable/ScheduledTable";
import newPlan from "../addNewMaintenancePlans/newPlan";
import CardFliper from "../PlanCards/cardFlipper";

export default function Tab() {
  // Vehicle type selection
  const { id } = useParams();

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
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
            <CardFliper />
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
  );
}
