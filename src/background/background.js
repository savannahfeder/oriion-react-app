const dates = new Set();

// runs every 15 minutes or 900,000 milliseconds
setInterval(handleStreak, 900000);

// if user visits course url for first time that day, increments streak by 1
const handleStreak = () => {
  if (!isUserTakingCourse()) return;
  const date = new Date();
  const simplifiedDate = `${date.getDate}/${date.getMonth}/${date.getFullYear}`;
  if (!dates.has(simplifiedDate)) {
    dates.add(simplifiedDate);
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
