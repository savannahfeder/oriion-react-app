import React, { useState } from "react";
import TopBar from "../../components/topbar/TopBar.jsx";
import { Link } from "react-router-dom";
import { sendEmail } from "../../services/email-service.js";

const Notifications = ({ notificationFrequency, setNotificationFrequency }) => {
  const toggleFrequency = () => {
    setNotificationFrequency((prevState) => {
      if (prevState === "daily") {
        return "weekly";
      } else if (prevState === "weekly") {
        return "bi-weekly";
      } else if (prevState === "bi-weekly") {
        return "monthly";
      } else {
        return "daily";
      }
    });
  };

  const setNotification = () => {
    createAlarm();
    
    chrome.alarms.onAlarm.addListener((alarm) => {
      sendEmail();
    });
  }

  const createAlarm = () => {
    chrome.alarms.create(
      {
        when: Date.now(),
        periodInMinutes: 0.5
      }
    );
  }

  return (
    <div className="meet-oriion">
      <TopBar />
      <div className="notifications--body body">
        <div>
          <h1 className="notifications--header">
            Stay consistent with email notifications
          </h1>
          <div className="notifications--tagline-div">
            We’ll send you emails{" "}
            <button
              class="notifications--frequency-button"
              onClick={toggleFrequency}
            >
              {notificationFrequency}
            </button>{" "}
            and when you’re about to lose your streak.
          </div>
          <Link 
            className="button button-link meet-oriion--button"
            onClick={() => setNotification()}
            to="/popup">
            Turn on Notifications
          </Link>
          <Link
            className="notifications--opt-out-link"
            onClick={() => setNotificationFrequency("never")}
            to="/popup"
          >
            Not Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
