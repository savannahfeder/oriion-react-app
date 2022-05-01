chrome.runtime.onInstalled.addListener(() => {
  console.log('This is a first install!');
  const datesTakenCourse = new Set();
  console.log(Window);

  chrome.alarms.create('handleStreak', { periodInMinutes: 0.1 });
});

// make alarm that triggers every 15 minutes
chrome.alarms.onAlarm.addListener((alarm) => {
  getCourseUrls();
  console.log(alarm);
});

const getCourseUrls = () => {
  userCourses = JSON.parse(localStorage.getItem('data'));
  console.log(userCourses);
};

// if user visits course url for first time that day, increments streak by 1
const handleStreak = () => {
  if (!isUserTakingCourse()) return;
  const currentDate = new Date().toLocaleDateString();
  if (!dates.has(currentDate)) {
    dates.add(currentDate);
    incrementStreak();
  }
};

const isUserTakingCourse = () => {
  const currentURL = chrome.runtime.getURL();
  // TODO: retreives course URL from app.js and checks if prexises match
  const courseURL = ''; //TODO
  return currentURL === courseURL;
};

// TODO: somehow import streak from app component (streak is in userData; but may
// be wise to extract it out into its own piece of state), export it, and send
// a message to app to increment streak from background script
const incrementStreak = () => {
  console.log('This should increment the streak!');
};
