// Replace your background.js code here

import { sendEmail } from "../services/email-service";

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    console.log("This is a first install!");
  } else if (details.reason == "update") {
    var thisVersion = chrome.runtime.getManifest().version;
    console.log(
      "Updated from " + details.previousVersion + " to " + thisVersion + "!"
    );
  }
});

chrome.runtime.onStartup.addListener(function() {
  console.log("set alarm");

  chrome.alarms.create(
    {
      when: Date.now(),
      periodInMinutes: 0.5
    }
  );
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    sendEmail();
    console.log("send email");
  });
});
