import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CoursePicker from './onboarding/CoursePicker/CoursePicker.jsx';
import CourseGoal from './onboarding/CourseGoal.jsx';
import Notifications from './onboarding/Notifications.jsx';
import ScheduleSelection from './onboarding/ScheduleSelection.jsx';
import Home from './Home.jsx';
import MeetOriion from './onboarding/MeetOriion.jsx';

const App = () => {
  const placeholderGoal = 'My course goal';
  const [courseGoal, setCourseGoal] = useState(placeholderGoal);
  const [userCourses, setUserCourses] = useState([]);
  const [notificationFrequency, setNotificationFrequency] = useState('daily');
  const [streak, setStreak] = useState(0);
  const [schedule, setSchedule] = useState({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });
  let isExistingUser; // brings back to home page every time
  // problem: it renders based on whatever the flag is initially set to; resetting isExistingUser at the end doesn't rerender things

  useEffect(() => {
    chrome.storage.sync.get(
      ['courseGoal', 'userCourses', 'streak', 'schedule'],
      (result) => {
        setCourseGoal(result.courseGoal ?? courseGoal);
        setStreak(result.streak ?? streak);
        setSchedule(result.schedule ?? schedule);
        setUserCourses(result.userCourses ?? userCourses);
        isExistingUser = checksIfExistingUser();
        console.log(isExistingUser); // returns false !!!
      }
    );
  }, [isExistingUser]);

  const checksIfExistingUser = () => {
    return (
      userCourses.length > 0 ||
      notificationFrequency !== 'daily' ||
      courseGoal !== placeholderGoal ||
      streak > 0
    );
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Home
            courseGoal={courseGoal}
            setCourseGoal={setCourseGoal}
            schedule={schedule}
            setSchedule={setSchedule}
          /> */}
          {isExistingUser && (
            <Home
              courseGoal={courseGoal}
              setCourseGoal={setCourseGoal}
              schedule={schedule}
              setSchedule={setSchedule}
            />
          )}
          {!isExistingUser && <MeetOriion />}
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
