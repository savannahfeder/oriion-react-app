import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FullPage from './full-page';
import Popup from './popup';
import CoursePicker from './CoursePicker';
import CourseGoal from './CourseGoal';
import ScheduleSelection from './ScheduleSelection';
import MeetOriion from './MeetOriion';
import '../css/index.css';

const App = () => {
  const isNewUser = localStorage.getItem('data') ? false : true;

  // sets data to user data retrieved from local storage, or newUserObject if no data is stored
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem('data')) || newUserObject
  );

  const newUserObject = {
    courseName: null,
    courseURL: null,
    courseGoal: null,
    courseSchedule: null,
    streak: 0,
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  };

  // storage and retrieval of user data from local storage
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // TODO: delete
  console.log(JSON.parse(localStorage.getItem('data')));
  console.log(data);

  // set badge text to streak
  // chrome.action.setBadgeText(
  //   {
  //     text: 'TEST',
  //   },
  //   () => {
  //     console.log('Set badge text successfully');
  //   }
  // );

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MeetOriion />
        </Route>
        <Route path="/get-started">
          <MeetOriion />
        </Route>
        <Route exact path="/popup">
          <Popup data={data} setData={setData} />
        </Route>
        <Route exact path="/select-course">
          <CoursePicker data={data} setData={setData} />
        </Route>
        <Route path="/set-goal">
          <CourseGoal data={data} setData={setData} />
        </Route>
        <Route path="/set-schedule">
          <ScheduleSelection data={data} setData={setData} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
