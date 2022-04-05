import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ScheduleWeekdayBlock from './ScheduleWeekdayBlock';
import ScheduleWeekdayInput from './ScheduleWeekdayInput';

//TODO: refactor schedule blocks and input fields into components to make less repetitive
const Schedule = ({ data, setData, currentPage }) => {
  const [sundaySelected, setSundaySelected] = useState(false);
  const [mondaySelected, setMondaySelected] = useState(false);
  const [tuesdaySelected, setTuesdaySelected] = useState(false);
  const [wednesdaySelected, setWednesdaySelected] = useState(false);
  const [thursdaySelected, setThursdaySelected] = useState(false);
  const [fridaySelected, setFridaySelected] = useState(false);
  const [saturdaySelected, setSaturdaySelected] = useState(false);

  let history = useHistory();
  const handleScheduleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted!');
    console.log(data);
    history.push('/notifications');
  };

  const handleToggle = (e, weekday) => {
    if (weekday === 'sunday') {
      setSundaySelected((prevState) => !prevState);
    } else if (weekday === 'monday') {
      setMondaySelected((prevState) => !prevState);
    } else if (weekday === 'tuesday') {
      setTuesdaySelected((prevState) => !prevState);
    } else if (weekday === 'wednesday') {
      setWednesdaySelected((prevState) => !prevState);
    } else if (weekday === 'thursday') {
      setThursdaySelected((prevState) => !prevState);
    } else if (weekday === 'friday') {
      setFridaySelected((prevState) => !prevState);
    } else if (weekday === 'saturday') {
      setSaturdaySelected((prevState) => !prevState);
    }
  };

  return (
    <div className="schedule-component">
      <ul className="schedule background-div">
        <ScheduleWeekdayBlock
          weekday="sunday"
          text="S"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={sundaySelected}
        />
        <ScheduleWeekdayBlock
          weekday="monday"
          text="M"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={mondaySelected}
        />
        <ScheduleWeekdayBlock
          weekday="tuesday"
          text="T"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={tuesdaySelected}
        />
        <ScheduleWeekdayBlock
          weekday="wednesday"
          text="W"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={wednesdaySelected}
        />
        <ScheduleWeekdayBlock
          weekday="thursday"
          text="T"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={thursdaySelected}
        />
        <ScheduleWeekdayBlock
          weekday="friday"
          text="F"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={fridaySelected}
        />
        <ScheduleWeekdayBlock
          weekday="saturday"
          text="S"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={saturdaySelected}
        />
      </ul>
      <ul class="schedule--inputs-wrapper">
        <div>
          {sundaySelected && (
            <ScheduleWeekdayInput
              weekday="Sunday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {mondaySelected && (
            <ScheduleWeekdayInput
              weekday="Monday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {tuesdaySelected && (
            <ScheduleWeekdayInput
              weekday="Tuesday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {wednesdaySelected && (
            <ScheduleWeekdayInput
              weekday="Wednesday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {thursdaySelected && (
            <ScheduleWeekdayInput
              weekday="Thursday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {fridaySelected && (
            <ScheduleWeekdayInput
              weekday="Friday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {saturdaySelected && (
            <ScheduleWeekdayInput
              weekday="Saturday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
        </div>
      </ul>
      {/* Only shows submit button on Schedule onboarding page and if at least one block selected  */}
      {currentPage === 'schedule' &&
        (sundaySelected ||
          mondaySelected ||
          tuesdaySelected ||
          wednesdaySelected ||
          thursdaySelected ||
          fridaySelected ||
          saturdaySelected) && (
          <div className="schedule--button-wrapper">
            <button onClick={handleScheduleSubmit} className="schedule--button">
              Submit
            </button>
          </div>
        )}
    </div>
  );
};

export default Schedule;
