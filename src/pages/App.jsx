import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CoursePicker from "./onboarding/CoursePicker/CoursePicker.jsx";
import CourseGoal from "./onboarding/CourseGoal.jsx";
import Notifications from "./onboarding/Notifications.jsx";
import ScheduleSelection from "./onboarding/ScheduleSelection.jsx";
import Home from "./Home.jsx";
import MeetOriion from "./onboarding/MeetOriion.jsx";

const App = () => {
  const newUserObject = {
    courseGoal: null,
    streak: 0,
  };
  const [userCourses, setUserCourses] = useState([]);

  const [notificationFrequency, setNotificationFrequency] = useState("daily");

  // returns empty array
  const testData = localStorage.getItem("data");
  console.log("Local storage returns...");
  console.log(testData);

  const checksIfNewUser = () => {
    const storage = JSON.parse(localStorage.getItem("data"));
    if (storage) {
      const isAnyUserInfoInputted = storage.courseGoal; // TODO: should also check storage for any courses or schedule inputted
      return !isAnyUserInfoInputted;
    }
    return true;
  };

  // sets data to user data retrieved from local storage, or newUserObject if no data is stored
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("data")) || newUserObject
  );

  // storage and retrieval of user data from local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  console.log("checking if new user...");
  console.log(checksIfNewUser());
  const [isNewUser, setIsNewUser] = useState(checksIfNewUser());

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
          {isNewUser && <MeetOriion />}
          {!isNewUser && <Home data={data} setData={setData} />}
        </Route>
        <Route path="/get-started">
          <MeetOriion />
        </Route>
        <Route exact path="/popup">
          <Home data={data} setData={setData} />
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
          <ScheduleSelection />
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
