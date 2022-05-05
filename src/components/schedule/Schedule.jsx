import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendEmail } from "../../services/email-service.js";
import ScheduleWeekdayBlock from "./ScheduleWeekdayBlock.jsx";
import ScheduleWeekdayInput from "./ScheduleWeekdayInput.jsx";

const Schedule = ({ schedule, setSchedule, currentPage }) => {
  const [selectedWeekdays, setSelectedWeekdays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  // let history = useHistory();
  const handleScheduleSubmit = (event) => {
    event.preventDefault();
    // if (currentPage === "schedule") {
    //   // history.push("/notifications");
    // } else {
    deselectAllToggles();
    sendEmail();
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
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.sunday}
        />
        <ScheduleWeekdayBlock
          weekday="monday"
          text="M"
          handleToggle={handleToggle}
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.monday}
        />
        <ScheduleWeekdayBlock
          weekday="tuesday"
          text="T"
          handleToggle={handleToggle}
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.tuesday}
        />
        <ScheduleWeekdayBlock
          weekday="wednesday"
          text="W"
          handleToggle={handleToggle}
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.wednesday}
        />
        <ScheduleWeekdayBlock
          weekday="thursday"
          text="T"
          handleToggle={handleToggle}
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.thursday}
        />
        <ScheduleWeekdayBlock
          weekday="friday"
          text="F"
          handleToggle={handleToggle}
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.friday}
        />
        <ScheduleWeekdayBlock
          weekday="saturday"
          text="S"
          handleToggle={handleToggle}
          schedule={schedule}
          setSchedule={setSchedule}
          isWeekdaySelected={selectedWeekdays.saturday}
        />
      </ul>
      <ul class="schedule--inputs-wrapper">
        <div>
          {selectedWeekdays.sunday && (
            <ScheduleWeekdayInput
              weekday="Sunday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.monday && (
            <ScheduleWeekdayInput
              weekday="Monday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.tuesday && (
            <ScheduleWeekdayInput
              weekday="Tuesday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.wednesday && (
            <ScheduleWeekdayInput
              weekday="Wednesday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.thursday && (
            <ScheduleWeekdayInput
              weekday="Thursday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.friday && (
            <ScheduleWeekdayInput
              weekday="Friday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
          {selectedWeekdays.saturday && (
            <ScheduleWeekdayInput
              weekday="Saturday"
              schedule={schedule}
              setSchedule={setSchedule}
              handleToggle={handleToggle}
            />
          )}
        </div>
      </ul>
      <div className="schedule--button-wrapper">
        {atLeastOneDaySelected && currentPage === "schedule" && (
          <Link className="button button-link form-button" to="/notifications">
            Submit
          </Link>
        )}
        {atLeastOneDaySelected && !(currentPage === "schedule") && (
          <button onClick={handleScheduleSubmit} className="schedule--button">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Schedule;
