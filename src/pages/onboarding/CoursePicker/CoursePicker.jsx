import React, { useState } from "react";
import TopBarPageSpecific from "../../../components/topbar/TopBarPageSpecific.jsx";
import Tag from "./Tag.jsx";
import { Link } from "react-router-dom";

const CoursePicker = ({ userCourses, setUserCourses }) => {
  // TODO: refactor to be objects that include both the site name and url, or hash table / dictionary
  const courses = [
    "udemy",
    "codeacademy",
    "coursera",
    "scrimba",
    "freecodecamp",
  ];
  const handleTagToggle = (event, course) => {
    setUserCourses((prevCourses) => {
      const courses = [...prevCourses];
      // remove course if in userCourses
      for (let i = 0; i < courses.length; i++) {
        if (courses[i] === course) {
          courses.splice(i, 1);
          return courses;
        }
      }
      // add course if not in userCourses
      courses.push(course);
      return courses;
    });
  };
  console.log(userCourses);

  const atLeastOneCourseSelected = userCourses.length > 0;
  // disabled button styling if no courses selected
  let styles;
  if (atLeastOneCourseSelected) {
    styles = "button couse-picker--submit-button button-link";
  } else if (!atLeastOneCourseSelected) {
    styles = "button couse-picker--submit-button button-link disabled";
  }

  return (
    <div>
      <TopBarPageSpecific page="Courses" />
      <div className="course-picker--body body">
        <h1 className="course-picker--header">Where do you learn to code?</h1>
        <div className="course-picker--tags">
          {courses.map((course) => (
            <Tag
              course={course}
              userCourses={userCourses}
              handleTagToggle={handleTagToggle}
            />
          ))}
        </div>
        <Link className={styles} to="/set-goal">
          Submit
        </Link>
      </div>
    </div>
  );
};

export default CoursePicker;
