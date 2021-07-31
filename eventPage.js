var myAudio = new Audio("./assets/jal-lijiye.mp3");

chrome.alarms.onAlarm.addListener(function (alarm) {
  myAudio.play();
});

// chrome.alarms.offAlarm.addListener(function (alarm) {
//   myAudio.pause();
// });

// commented code is to be used on second version to On/Off Audio
