import React from "react";
import TopBarPageSpecific from "../../components/topbar/TopBarPageSpecific.jsx";
import Schedule from "../../components/schedule/Schedule.jsx";

export default function ScheduleSelection({ data, setData }) {
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
        <Schedule data={data} setData={setData} currentPage="schedule" />
      </div>
    </div>
  );
}
