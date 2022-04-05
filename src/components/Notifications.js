import React, { useState } from 'react';
import TopBar from './TopBar.js';
import { Link } from 'react-router-dom';

const Notifications = ({ notificationFrequency, setNotificationFrequency }) => {
  console.log(notificationFrequency);
  const toggleFrequency = () => {
    setNotificationFrequency((prevState) => {
      if (prevState === 'daily') {
        return 'weekly';
      } else if (prevState === 'weekly') {
        return 'bi-weekly';
      } else if (prevState === 'bi-weekly') {
        return 'monthly';
      } else {
        return 'daily';
      }
    });
  };

  return (
    <div className="meet-oriion">
      <TopBar />
      <div className="notifications--body body">
        <div>
          <h1 className="notifications--header">
            Stay consistent with email notifications
          </h1>
          <div className="notifications--tagline-div">
            We’ll send you emails{' '}
            <button
              class="notifications--frequency-button"
              onClick={toggleFrequency}
            >
              {notificationFrequency}
            </button>{' '}
            and when you’re about to lose your streak.
          </div>
          <Link className="button button-link meet-oriion--button" to="/popup">
            Turn on Notifications
          </Link>
          {/* TODO: below add onClick={setNotificiationFrequency('never')} */}
          <Link className="notifications--opt-out-link" to="/popup">
            Not Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
