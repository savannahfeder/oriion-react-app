import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ScheduleWeekdayBlock from './ScheduleWeekdayBlock';
import ScheduleWeekdayInput from './ScheduleWeekdayInput';

const Schedule = ({ data, setData, currentPage }) => {
  const [selectedWeekdays, setSelectedWeekdays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  let history = useHistory();
  const handleScheduleSubmit = (event) => {
    event.preventDefault();
    if (currentPage === 'schedule') {
      history.push('/notifications');
    } else {
      deselectAllToggles();
    }
  };

  const handleToggle = (e, weekday) => {
    setSelectedWeekdays((prevState) => {
      return {
        ...prevState,
        [weekday]: !prevState[weekday],
      };
    });
  };

  const atLeastOneDaySelected =
    selectedWeekdays.sunday ||
    selectedWeekdays.monday ||
    selectedWeekdays.tuesday ||
    selectedWeekdays.wednesday ||
    selectedWeekdays.thursday ||
    selectedWeekdays.friday ||
    selectedWeekdays.saturday;

  const deselectAllToggles = () => {
    setSelectedWeekdays({
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    });
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
          isWeekdaySelected={selectedWeekdays.sunday}
        />
        <ScheduleWeekdayBlock
          weekday="monday"
          text="M"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={selectedWeekdays.monday}
        />
        <ScheduleWeekdayBlock
          weekday="tuesday"
          text="T"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={selectedWeekdays.tuesday}
        />
        <ScheduleWeekdayBlock
          weekday="wednesday"
          text="W"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={selectedWeekdays.wednesday}
        />
        <ScheduleWeekdayBlock
          weekday="thursday"
          text="T"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={selectedWeekdays.thursday}
        />
        <ScheduleWeekdayBlock
          weekday="friday"
          text="F"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={selectedWeekdays.friday}
        />
        <ScheduleWeekdayBlock
          weekday="saturday"
          text="S"
          handleToggle={handleToggle}
          data={data}
          setData={setData}
          isWeekdaySelected={selectedWeekdays.saturday}
        />
      </ul>
      <ul class="schedule--inputs-wrapper">
        <div>
          {selectedWeekdays.sunday && (
            <ScheduleWeekdayInput
              weekday="Sunday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.monday && (
            <ScheduleWeekdayInput
              weekday="Monday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.tuesday && (
            <ScheduleWeekdayInput
              weekday="Tuesday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.wednesday && (
            <ScheduleWeekdayInput
              weekday="Wednesday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.thursday && (
            <ScheduleWeekdayInput
              weekday="Thursday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.friday && (
            <ScheduleWeekdayInput
              weekday="Friday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.saturday && (
            <ScheduleWeekdayInput
              weekday="Saturday"
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
          )}
        </div>
      </ul>
      {atLeastOneDaySelected && (
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
