import React from 'react';

export default function ScheduleWeekdayInput(props) {
  // const hasInputtedTimeSlots = data[weekday] ? data[weekday].length > 1 : false;

  const currentWeekday = props.weekday.toLowerCase();

  const handleInput = (e) => {
    const { name, value } = e.target;
    props.setData((prevData) => {
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
    console.log(props.data);
  };

  return (
    <li class="day-input">
      {props.weekday}{' '}
      <input
        class="input-time"
        type="text"
        name="field-one"
        placeholder={
          props.data[currentWeekday].length > 0
            ? props.data[currentWeekday][0]
            : 'hh:mm'
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
          props.data[currentWeekday].length > 1
            ? props.data[currentWeekday][1]
            : 'hh:mm'
        }
        // value={props.data[currentWeekday] ? props.data[currentWeekday][1] : null} //TODO: change to controlled component
        onChange={handleInput}
      />
    </li>
  );
}
