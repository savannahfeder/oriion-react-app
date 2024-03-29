import React from "react";
import TopBar from "../components/topbar/TopBar.jsx";
import Schedule from "../components/schedule/Schedule.jsx";
import BarChart from "../components/BarChart.jsx";

const Home = ({ data, setData, schedule, setSchedule }) => {
  return (
    <div className="home">
      <TopBar />
      <div className="home--body body">
        <p className="bold">
          <span role="img">🔥 </span>
          {data.streak} day streak
        </p>
        <div className="background-div">
          <p className="small-light">My goal</p>
          <p className="small-bold">
            {data.courseGoal ? data.courseGoal : "Placeholder goal"}
          </p>
        </div>
        <p className="bold">Daily Schedule</p>
        <Schedule
          currentPage="home"
          schedule={schedule}
          setSchedule={setSchedule}
        />
        <p className="bold">Weekly Analytics</p>
        <BarChart />
      </div>
    </div>
  );
};

export default Home;
