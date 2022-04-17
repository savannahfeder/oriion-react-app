import React from "react";
import TopBar from "./TopBar.js";
import Schedule from "./Schedule";
import BarChart from "./BarChart.jsx";

const Popup = ({ data, setData }) => {
  // const { streak, courseGoal } = data;
  return (
    <div className="home">
      <TopBar />
      <div className="home--body body">
        <p className="bold">
          <span role="img">🔥</span>
          {data.streak} day streak
        </p>
        <div className="background-div">
          <p className="small-light">My goal</p>
          <p className="small-bold">
            {data.courseGoal ? data.courseGoal : "Placeholder goal"}
          </p>
        </div>
        <p className="bold">Daily Schedule</p>
        <Schedule data={data} setData={setData} currentPage="home" />
        <p className="bold">Weekly Analytics</p>
        <BarChart />
      </div>
    </div>
  );
};

export default Popup;
