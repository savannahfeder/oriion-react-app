import React, { useState } from "react";
import TopBar from "../components/topbar/TopBar.jsx";
import Schedule from "../components/schedule/Schedule.jsx";
import BarChart from "../components/BarChart.jsx";

const Popup = ({ data, setData }) => {
  const [streak, setStreak] = useState(0);
  return (
    <div className="home">
      <TopBar />
      <div className="home--body body">
        <p className="bold">
          <span role="img">🔥 </span>
          {streak} day streak
        </p>
        <div className="background-div">
          <p className="small-light">My goal</p>
          <p className="small-bold">
            {data.courseGoal ? data.courseGoal : "Placeholder goal"}
          </p>
        </div>
        <p className="bold">Daily Schedule</p>
        <Schedule currentPage="home" />
        <p className="bold">Weekly Analytics</p>
        <BarChart />
      </div>
    </div>
  );
};

export default Popup;
