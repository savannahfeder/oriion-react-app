import React from 'react';

export default function ScheduleWeekdayInput({
  data,
  setData,
  weekday,
  handleToggle,
}) {
  // const hasInputtedTimeSlots = data[weekday] ? data[weekday].length > 1 : false;

  const currentWeekday = weekday.toLowerCase();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      let timeSlotsArray = [...prevData[currentWeekday]];
      if (name === 'field-one') {
        timeSlotsArray[0] = value;
      } else {
        timeSlotsArray[1] = value;
      }
      return {
        ...prevData,
        [currentWeekday]: timeSlotsArray,
      };
    });
    console.log(data);
  };

  const resetWeekdayInputs = (e) => {
    console.log('reset!');

    setData((prevData) => {
      return {
        ...prevData,
        [currentWeekday]: [],
      };
    });
    // updates weekday selected state to false in Schedule component
    handleToggle(e, currentWeekday);
  };

  return (
    <li class="day-input">
      {weekday}{' '}
      <input
        class="input-time"
        type="text"
        name="field-one"
        placeholder={
          data[currentWeekday].length > 0 ? data[currentWeekday][0] : 'hh:mm'
        }
        // value={props.data[currentWeekday] ? props.data[currentWeekday][0] : null} //TODO: change to controlled component
        onChange={handleInput}
      />{' '}
      to{' '}
      <input
        class="input-time"
        type="text"
        name="field-two"
        placeholder={
          data[currentWeekday].length > 1 ? data[currentWeekday][1] : 'hh:mm'
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
