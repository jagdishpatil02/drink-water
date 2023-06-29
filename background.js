// Create a variable to store the tab ID
let tabId = null;

// Create the new tab once
chrome.tabs.create({}, function (newTab) {
  tabId = newTab.id;
});

// Update the tab whenever the alarm fires
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm && tabId !== null) {
    let url = chrome.runtime.getURL("./assets/jal-lijiye.mp3");
    url += "?volume=0.5&src=jal-lijiye.mp3&length=1000";

    chrome.tabs.update(tabId, { url: url });
  }
});
