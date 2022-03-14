chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm) {
    let url = chrome.runtime.getURL("./assets/jal-lijiye.mp3");

    // set this string dynamically in your code, this is just an example
    // this will play success.wav at half the volume and close the popup after a second
    url += "?volume=0.5&src=jal-lijiye.mp3&length=1000";

    chrome.tabs.create({
      url,
    });
  }
});
