import React, { useEffect } from 'react';
import TopBar from '../components/topbar/TopBar.jsx';
import Schedule from '../components/schedule/Schedule.jsx';
import BarChart from '../components/BarChart.jsx';

const Home = ({
  streak,
  setStreak,
  courseGoal,
  setCourseGoal,
  schedule,
  setSchedule,
}) => {
  // TODO:
  //  - saves streak on each reload; should change later since this will overwrite background script incrementing streak
  //  - later, streak should ONLY be instantiated and set in the background script (and the badge text should be set there too)
  useEffect(() => {
    chrome.storage.sync.set({
      streak,
    });
  });
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
          <p className="small-bold">{courseGoal}</p>
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
