chrome.runtime.onInstalled.addListener(() => {
  console.log("Productivity Timer installed.");
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "productivityTimer") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon128.png",
      title: "Time's Up!",
      message: "Your work session is over. Take a break!"
    });
  }
});
