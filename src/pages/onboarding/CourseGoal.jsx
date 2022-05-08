import React from 'react';
import TopBarPageSpecific from '../../components/topbar/TopBarPageSpecific.jsx';
import { Link } from 'react-router-dom';

export default function CoursePicker({ courseGoal, setCourseGoal }) {
  const handleInput = (e) => {
    setCourseGoal(e.target.value);
  };

  const saveToLocalStorage = (e) => {
    chrome.storage.sync.set(
      {
        courseGoal,
      },
      () => {
        console.log('courseGoal has been set to the following in storage...');
        console.log(courseGoal);
      }
    );
  };

  return (
    <div className="course-goal">
      <TopBarPageSpecific page="Goal" />
      <div className="course-goal--container">
        <p className="bold course-goal--prompt">Set Your Course Goal</p>
        <p className="small-light course-goal--explanation">
          This should be the{' '}
          <strong>guiding reason behind why you're taking the course.</strong>{' '}
          Make sure it's meaningful and time-based.
        </p>
        <div>
          <input
            className="input-field course-goal--field"
            type="text"
            id="course-goal--goal"
            name="course-goal--goal"
            placeholder="Become a frontend developer by December 2022"
            onChange={handleInput}
          />
          <br />
          <Link
            onClick={saveToLocalStorage}
            className="button button-link form-button"
            to="/set-schedule"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
