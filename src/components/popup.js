/* global chrome */
import React from 'react';
import TopBar from '../components/TopBar.js';
import Schedule from './Schedule';

const Popup = ({ data, setData }) => {
  console.log(window.location);
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
            {data.courseGoal ? data.courseGoal : 'Placeholder goal'}
          </p>
        </div>
        <p className="bold">Daily Schedule</p>
        <Schedule data={data} setData={setData} currentPage="home" />
      </div>
    </div>
  );
};

export default Popup;
