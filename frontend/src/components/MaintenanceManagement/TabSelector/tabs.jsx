import { useParams } from "react-router-dom";
import { Tabs } from "react-bootstrap";
import "./Tabs.css";
import PlanCard from "../PlanCards/maintenancePlanCard";
import ScheduleTable from "../ScheduleTable/ScheduledTable";

export default function Tab() {
  // Vehicle type selection
  const { id } = useParams();

  // Vehicle type selection close
  return (
    <div className="data">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="SCHEDULED">
          <h2>Arrived Schedules</h2>
          <h5>Vehicle Type :- {id}</h5>
          <hr />
          <ScheduleTable />
        </Tab>
        <Tab eventKey="profile" title="CREATED PLANS">
          <h2>Created Plans</h2>
          <h5>Vehicle Type :- {id}</h5>
          <hr />
          <div className="cardLinner">
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </div>
        </Tab>
        <Tab eventKey="contact" title="NEW PLAN">
          <h2>Create a New Plan</h2>
          <h5>Vehicle Type :- {id}</h5>
          <hr />
        </Tab>
      </Tabs>
    </div>
  );
}
