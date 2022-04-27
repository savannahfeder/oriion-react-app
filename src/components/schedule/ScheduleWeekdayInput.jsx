import React from "react";

export default function ScheduleWeekdayInput({
  schedule,
  setSchedule,
  weekday,
  handleToggle,
}) {
  // const hasInputtedTimeSlots = data[weekday] ? data[weekday].length > 1 : false;

  const currentWeekday = weekday.toLowerCase();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => {
      let timeSlotsArray = [...prevSchedule[currentWeekday]];
      if (name === "field-one") {
        timeSlotsArray[0] = value;
      } else {
        timeSlotsArray[1] = value;
      }
      return {
        ...prevSchedule,
        [currentWeekday]: timeSlotsArray,
      };
    });
  };

  const resetWeekdayInputs = (e) => {
    setSchedule((prevSchedule) => {
      return {
        ...prevSchedule,
        [currentWeekday]: [],
      };
    });
    // updates weekday selected state to false in Schedule component
    handleToggle(e, currentWeekday);
  };

  return (
    <li class="day-input">
      {weekday}{" "}
      <input
        class="input-time"
        type="text"
        name="field-one"
        placeholder={
          schedule[currentWeekday].length > 0
            ? schedule[currentWeekday][0]
            : "hh:mm"
        }
        // value={props.data[currentWeekday] ? props.data[currentWeekday][0] : null} //TODO: change to controlled component
        onChange={handleInput}
      />{" "}
      to{" "}
      <input
        class="input-time"
        type="text"
        name="field-two"
        placeholder={
          schedule[currentWeekday].length > 1
            ? schedule[currentWeekday][1]
            : "hh:mm"
        }
        // value={props.data[currentWeekday] ? props.data[currentWeekday][1] : null} //TODO: change to controlled component
        onChange={handleInput}
      />
      <button
        class="schedule--delete-button"
        onClick={(e) => resetWeekdayInputs(e)}
      >
        Delete
      </button>
    </li>
  );
}
