import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CoursePicker from './onboarding/CoursePicker/CoursePicker.jsx';
import CourseGoal from './onboarding/CourseGoal.jsx';
import Notifications from './onboarding/Notifications.jsx';
import ScheduleSelection from './onboarding/ScheduleSelection.jsx';
import Home from './Home.jsx';
import MeetOriion from './onboarding/MeetOriion.jsx';

const App = () => {
  const [userCourses, setUserCourses] = useState(
    JSON.parse(localStorage.getItem('userCourses')) || []
  );

  const [notificationFrequency, setNotificationFrequency] = useState(
    JSON.parse(localStorage.getItem('notificationFrequency')) || 'daily'
  );

  // !!! change to fetching from local storage
  const [courseGoal, setCourseGoal] = useState('My course goal');
  const [streak, setStreak] = useState(0);

  const [schedule, setSchedule] = useState(
    JSON.parse(localStorage.getItem('schedule')) || {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    }
  );

  const isExistingUser =
    userCourses.length > 0 ||
    notificationFrequency !== 'daily' ||
    courseGoal !== null ||
    streak > 0;

  chrome.action.setBadgeText(
    {
      text: String(streak),
    },
    () => {
      console.log('Badge text set successfully!');
    }
  );

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {!isExistingUser && <MeetOriion />}
          {isExistingUser && (
            <Home
              streak={streak}
              setStreak={setStreak}
              courseGoal={courseGoal}
              setCourseGoal={setCourseGoal}
              schedule={schedule}
              setSchedule={setSchedule}
            />
          )}
        </Route>
        <Route path="/get-started">
          <MeetOriion />
        </Route>
        <Route exact path="/select-course">
          <CoursePicker
            userCourses={userCourses}
            setUserCourses={setUserCourses}
          />
        </Route>
        <Route path="/set-goal">
          <CourseGoal courseGoal={courseGoal} setCourseGoal={setCourseGoal} />
        </Route>
        <Route path="/set-schedule">
          <ScheduleSelection schedule={schedule} setSchedule={setSchedule} />
        </Route>
        <Route path="/notifications">
          <Notifications
            notificationFrequency={notificationFrequency}
            setNotificationFrequency={setNotificationFrequency}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
