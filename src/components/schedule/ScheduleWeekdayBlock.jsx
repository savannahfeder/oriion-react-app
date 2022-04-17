import React, { useState } from 'react';

export default function ScheduleWeekdayBlock({
  data,
  weekday,
  setData,
  text,
  handleToggle,
  isWeekdaySelected,
}) {
  const hasInputtedTimeSlots = data[weekday] ? data[weekday].length > 1 : false;
  const isSelectedAndInputtedTimeSlots =
    isWeekdaySelected && hasInputtedTimeSlots;

  const addClassNameForStyling = () => {
    if (isSelectedAndInputtedTimeSlots) {
      return ' selected editing';
    } else if (hasInputtedTimeSlots) {
      return ' selected';
    } else if (isWeekdaySelected) {
      return ' editing';
    } else {
      return '';
    }
  };

  let className = 'date-item pointer' + addClassNameForStyling();

  return (
    <li onClick={(e) => handleToggle(e, weekday)} className={className}>
      {text}
    </li>
  );
}
