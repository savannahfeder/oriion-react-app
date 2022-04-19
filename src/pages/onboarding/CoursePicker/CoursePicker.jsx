import React, { useState } from "react";
import TopBarPageSpecific from "../../../components/topbar/TopBarPageSpecific.jsx";
import Tag from "./Tag.jsx";
import { useHistory } from "react-router-dom";

const CoursePicker = () => {
  // TODO: refactor to be objects that include both the site name and url, or hash table / dictionary
  const courses = [
    "udemy",
    "codeacademy",
    "coursera",
    "scrimba",
    "freecodecamp",
  ];
  const [userCourses, setUserCourses] = useState([]);
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
        <button
          className="button couse-picker--submit-button"
          disabled={!atLeastOneCourseSelected}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CoursePicker;

// export default function CoursePicker(props) {
//   let history = useHistory(); //!!! history hook stops page from rendering; use Link instead
//   const handleCourseSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted!");
//     history.push("/set-goal");
//   };

//   const handleNameInput = (e) => {
//     props.setData((prevData) => {
//       return {
//         ...prevData,
//         courseName: e.target.value,
//       };
//     });
//     console.log(props.data);
//   };

//   const handleURLInput = (e) => {
//     props.setData((prevData) => {
//       return {
//         ...prevData,
//         courseURL: e.target.value,
//       };
//     });
//     console.log(props.data);
//   };

//   return (
//     <div className="course-picker">
//       <TopBarPageSpecific page="Course" />
//       <div className="course-picker--container">
//         <p className="bold course-picker--prompt">{props.data.name}</p>
//         <form form_id="course-picker--form" onSubmit={handleCourseSubmit}>
//           <label for="course-picker--form" className="small-light label">
//             Course Name
//           </label>
//           <br />
//           <input
//             className="input-field"
//             type="text"
//             id="course-picker--name"
//             name="course-picker--name"
//             onChange={handleNameInput}
//           />
//           <br />
//           <label for="course-picker--form" className="small-light label">
//             Course URL
//           </label>
//           <br />
//           <input
//             className="input-field"
//             type="text"
//             id="course-picker--url"
//             name="course-picker--url"
//             onChange={handleURLInput}
//           />
//           <br />
//           <input className="button form-button" type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   );
// }
