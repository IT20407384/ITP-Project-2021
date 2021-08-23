import { useParams } from "react-router-dom";
import { Tabs } from "react-bootstrap";
import "../css/Tabs.css";
import PlanCard from "./maintenancePlanCard";
import ScheduleTable from "./ScheduledTable";

export default function Tab() {
  // Vehicle type selection
  const { id } = useParams();

  //   // Vehicle type selection close
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
          <h2>Content 2</h2>
          <hr />
          <div className="cardLinner">
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </div>
        </Tab>
        <Tab eventKey="contact" title="NEW PLAN">
          <h2>Content 3</h2>
          <hr />
        </Tab>
      </Tabs>
    </div>
  );
}
