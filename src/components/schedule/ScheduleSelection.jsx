import React from "react";
import TopBarPageSpecific from "./TopBarPageSpecific.jsx";
import Schedule from "./Schedule.jsx";

export default function ScheduleSelection(props) {
  return (
    <div className="schedule-selection">
      <TopBarPageSpecific page="Scheduling" />
      <div className="schedule-selection--container">
        <p className="bold schedule-selection--prompt">Daily Schedule</p>
        <p className="small-light schedule-selection--explanation">
          Evidence-backed explanation on the{" "}
          <strong>importance of taking this step.</strong> Also mention to add
          to calendar, and will determine when popups appear if enabled.
        </p>
        <Schedule
          data={props.data}
          setData={props.setData}
          currentPage="schedule"
        />
      </div>
    </div>
  );
}
