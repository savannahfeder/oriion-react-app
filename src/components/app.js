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
  //Sets user data as state, either from local storage if exists or as new object
  const [data, setData] = useState(
    () =>
      JSON.parse(localStorage.getItem('data')) || {
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
      }
  );

  console.log(JSON.parse(localStorage.getItem('data')));
  console.log(data);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  console.log(JSON.parse(localStorage.getItem('data')));
  console.log(data);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FullPage} />
        <Route path="/get-started" component={MeetOriion} />
        <Route exact path="/popup">
          <Popup data={data} setData={setData} />
        </Route>
        <Route path="/select-course">
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
