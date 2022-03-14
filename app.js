var alarmClock = {
  onHandler: function (e) {
    chrome.alarms.create("myAlarm", {
      delayInMinutes: 0.2,
      periodInMinutes: 0.2,
    });
  },

  offHandler: function (e) {},

  setup: function () {},
};

document.addEventListener("DOMContentLoaded", function () {
  alarmClock.setup();
  alarmClock.onHandler();
});

window.resizeTo(0, 0);
onload = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let audio = new Audio(urlParams.get("src"));
  audio.volume = urlParams.get("volume");
  audio.play();
  setTimeout(() => {
    close();
  }, urlParams.get("length"));
};
