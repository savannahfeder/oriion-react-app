import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CoursePicker from "./onboarding/CoursePicker/CoursePicker.jsx";
import CourseGoal from "./onboarding/CourseGoal.jsx";
import Notifications from "./onboarding/Notifications.jsx";
import ScheduleSelection from "./onboarding/ScheduleSelection.jsx";
import Home from "./Home.jsx";
import MeetOriion from "./onboarding/MeetOriion.jsx";

const App = () => {
  // retrieves data from local storage, or initializes it if does not exist
  const [userCourses, setUserCourses] = useState(
    JSON.parse(localStorage.getItem("userCourses")) || []
  );
  const [notificationFrequency, setNotificationFrequency] = useState(
    JSON.parse(localStorage.getItem("notificationFrequency")) || "daily"
  );
  const [data, setData] = useState(
    () =>
      JSON.parse(localStorage.getItem("data")) || {
        courseGoal: null,
        streak: 0,
      }
  );
  const [schedule, setSchedule] = useState(
    JSON.parse(localStorage.getItem("schedule")) || {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    }
  );

  // storage of user data in local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("userCourses", JSON.stringify(userCourses));
    localStorage.setItem(
      "notificationFrequency",
      JSON.stringify(notificationFrequency)
    );
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [data, userCourses, notificationFrequency, schedule]);

  const isExistingUser =
    userCourses.length > 0 ||
    notificationFrequency !== "daily" ||
    data.courseGoal !== null ||
    data.streak > 0;

  chrome.action.setBadgeText(
    {
      text: String(data.streak),
    },
    () => {
      console.log("Badge text set successfully!");
    }
  );

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {!isExistingUser && <MeetOriion />}
          {isExistingUser && (
            <Home
              data={data}
              setData={setData}
              schedule={schedule}
              setSchedule={setSchedule}
            />
          )}
        </Route>
        <Route path="/get-started">
          <MeetOriion />
        </Route>
        <Route exact path="/popup">
          <Home
            data={data}
            setData={setData}
            schedule={schedule}
            setSchedule={setSchedule}
          />
        </Route>
        <Route exact path="/select-course">
          <CoursePicker
            userCourses={userCourses}
            setUserCourses={setUserCourses}
          />
        </Route>
        <Route path="/set-goal">
          <CourseGoal data={data} setData={setData} />
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
