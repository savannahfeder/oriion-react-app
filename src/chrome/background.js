chrome.runtime.onInstalled.addListener(() => {
  console.log('This is a first install!');
  setBadgeText(0);
  instantiateStreak();
  instantiateDatesTakenCourseList();
  chrome.alarms.create('handleStreakAlarm', { periodInMinutes: 0.1 }); // should run every 15 mins
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  handleStreak();
});

const getUserCourses = async () => {
  const userCoursesObject = await chrome.storage.sync.get(['userCourses']);
  // const courseURLs = userCoursesObject.userCourses.map(
  //   (course) => `*://*.${course}/*`
  // );
  return userCoursesObject.userCourses;
};

const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

// if user visits course url for first time that day, increments streak by 1
const handleStreak = () => {
  if (!isUserOnCourseURL()) return;
  const currentDate = new Date().toLocaleDateString();
  chrome.storage.sync.get(['datesTakenCourse'], (result) => {
    const datesTakenCourse = result.datesTakenCourse;
    if (!datesTakenCourse.has(currentDate)) {
      datesTakenCourse.add(currentDate);
      incrementStreak();
      // add: function that updates datesTakenCourse in storage
    }
  });
};

const isUserOnCourseURL = async () => {
  const userCourses = await getUserCourses();
  const currentTab = await getCurrentTab();
  const currentURL = currentTab.url;

  userCourses.forEach((course) => {
    if (currentURL.includes(course)) {
      return true;
    }
  });
  return false;
};

const instantiateStreak = () => {
  chrome.storage.sync.set(
    {
      streak: 0,
    },
    () => {
      console.log('Streak instantiated to 0!');
      setBadgeText(0);
    }
  );
};

const setBadgeText = (streak) => {
  chrome.action.setBadgeText(
    {
      text: String(streak),
    },
    () => console.log('Badge text has been set!')
  );
};

const incrementStreak = () => {
  chrome.storage.sync.get(['streak'], (result) => {
    const incrementedStreak = result.streak + 1;
    chrome.storage.sync.set({
      streak: incrementedStreak,
    });
    console.log('Incremented streak to ' + incrementedStreak);
    setBadgeText(incrementedStreak);
  });
};

const instantiateDatesTakenCourseList = () => {
  // TODO: if already stored in chrome storage, retrieve that instead
  const datesTakenCourse = new Set();
  chrome.storage.sync.set(
    {
      datesTakenCourse,
    },
    () => console.log('Instantiated dates taken course list!')
  );
};
