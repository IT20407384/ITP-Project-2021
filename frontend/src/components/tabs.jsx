import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Tabs.css";
import ScheduleTable from "./ScheduledTable";

function Tabs() {
  // Tabs selection
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };
  // Tabs selection closed

  // Vehicle type selection
  const { id } = useParams();

  // Vehicle type selection close

  return (
    <div className="data">
      <div className="TabsContainer">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            SCHEDULED
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
            CREATED PLANS
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>
            NEW PLAN
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }>
            <h2>Arrived Schedules</h2>
            <h5>Vehicle Type :- {id}</h5>
            <hr />
            <ScheduleTable />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }>
            <h2>Content 2</h2>
            <hr />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }>
            <h2>Content 3</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
