import React from "react";
import TopBarPageSpecific from "../../components/topbar/TopBarPageSpecific.jsx";
import { useHistory } from "react-router-dom";

export default function CoursePicker(props) {
  // let history = useHistory(); //!!! history hook stops page from rendering; use Link instead
  const handleCourseSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    // history.push("/set-goal");
  };

  const handleNameInput = (e) => {
    props.setData((prevData) => {
      return {
        ...prevData,
        courseName: e.target.value,
      };
    });
    console.log(props.data);
  };

  const handleURLInput = (e) => {
    props.setData((prevData) => {
      return {
        ...prevData,
        courseURL: e.target.value,
      };
    });
    console.log(props.data);
  };

  return (
    <div className="course-picker">
      <TopBarPageSpecific page="Course" />
      <div className="course-picker--container">
        <p className="bold course-picker--prompt">{props.data.name}</p>
        <form form_id="course-picker--form" onSubmit={handleCourseSubmit}>
          <label for="course-picker--form" className="small-light label">
            Course Name
          </label>
          <br />
          <input
            className="input-field"
            type="text"
            id="course-picker--name"
            name="course-picker--name"
            onChange={handleNameInput}
          />
          <br />
          <label for="course-picker--form" className="small-light label">
            Course URL
          </label>
          <br />
          <input
            className="input-field"
            type="text"
            id="course-picker--url"
            name="course-picker--url"
            onChange={handleURLInput}
          />
          <br />
          <input className="button form-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
