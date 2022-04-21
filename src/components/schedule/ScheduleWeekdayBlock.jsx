import React, { useState } from "react";

export default function ScheduleWeekdayBlock({
  weekday,
  text,
  handleToggle,
  isWeekdaySelected,
  schedule,
  setSchedule,
}) {
  const hasInputtedTimeSlots = schedule[weekday]
    ? schedule[weekday].length > 1
    : false;
  const isSelectedAndInputtedTimeSlots =
    isWeekdaySelected && hasInputtedTimeSlots;

  const addClassNameForStyling = () => {
    if (isSelectedAndInputtedTimeSlots) {
      return " selected editing";
    } else if (hasInputtedTimeSlots) {
      return " selected";
    } else if (isWeekdaySelected) {
      return " editing";
    } else {
      return "";
    }
  };

  let className = "date-item pointer" + addClassNameForStyling();

  return (
    <li onClick={(e) => handleToggle(e, weekday)} className={className}>
      {text}
    </li>
  );
}
