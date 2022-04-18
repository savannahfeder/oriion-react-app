import React from "react";
import TopBarPageSpecific from "../../components/topbar/TopBarPageSpecific.jsx";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function CoursePicker(props) {
  let history = useHistory();
  const handleGoalSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    history.push("/set-schedule");
  };

  const handleInput = (e) => {
    props.setData((prevData) => {
      return {
        ...prevData,
        courseGoal: e.target.value,
      };
    });
  };

  return (
    <div className="course-goal">
      <TopBarPageSpecific page="Goal" />
      <div className="course-goal--container">
        <p className="bold course-goal--prompt">Set Your Course Goal</p>
        <p className="small-light course-goal--explanation">
          This should be the{" "}
          <strong>guiding reason behind why you're taking the course.</strong>{" "}
          Make sure it's meaningful and time-based.
        </p>
        <form form_id="course-goal--form" onSubmit={handleGoalSubmit}>
          <input
            className="input-field course-goal--field"
            type="text"
            id="course-goal--goal"
            name="course-goal--goal"
            placeholder="Become a frontend developer by December 2022"
            onChange={handleInput}
          />
          <br />
          <input
            className="button form-button course-goal--button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
