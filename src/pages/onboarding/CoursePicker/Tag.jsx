import React, { useState } from "react";

const Tag = ({ course, userCourses, handleTagToggle }) => {
  const styles = userCourses.includes(course) ? "selected tag" : "tag";

  return (
    <button onClick={(e) => handleTagToggle(e, course)} className={styles}>
      {course}
    </button>
  );
};

export default Tag;
