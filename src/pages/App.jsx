// import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CoursePicker from "./onboarding/CoursePicker.jsx";
import CourseGoal from "./onboarding/CourseGoal.jsx";
import Notifications from "./onboarding/Notifications.jsx";
import ScheduleSelection from "./onboarding/ScheduleSelection.jsx";
// import FullPage from "./full-page";
// import Popup from "./popup";
// import CoursePicker from "./CoursePicker";
// import CourseGoal from "./CourseGoal";
// import ScheduleSelection from "./ScheduleSelection";
import MeetOriion from "./onboarding/MeetOriion.jsx";
// import Notifications from "./Notifications";

const App = () => {
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

  const [notificationFrequency, setNotificationFrequency] = useState("daily");

  const [isNewUser, setIsNewUser] = useState(
    localStorage.getItem("data") ? false : true
  );

  // sets data to user data retrieved from local storage, or newUserObject if no data is stored
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("data")) || newUserObject
  );

  // storage and retrieval of user data from local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  chrome.action.setBadgeText(
    {
      text: String(data.streak),
    },
    () => {
      console.log("Set badge text successfully!");
    }
  );

  return (
    <div className="App">
      <ScheduleSelection data={data} setData={setData} />
      {/* <Switch>
        <Route exact path="/">
          <MeetOriion />
          {isNewUser && <MeetOriion />}
          {!isNewUser && <Popup data={data} setData={setData} />}
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
        <Route path="/notifications">
          <Notifications
            notificationFrequency={notificationFrequency}
            setNotificationFrequency={setNotificationFrequency}
          /> 
        </Route>
      </Switch>*/}
    </div>
  );
};

export default App;
