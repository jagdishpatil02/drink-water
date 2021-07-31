var alarmClock = {
  onHandler: function (e) {
    // getActiveBtn(e);
    chrome.alarms.create("myAlarm", {
      delayInMinutes: 20,
      periodInMinutes: 20,
    });
  },

  offHandler: function (e) {
    // getActiveBtn(e);
    // chrome.alarms.clear("myAlarm");
  },

  setup: function () {
    // var alarmOn = document.getElementById("alarmOn");
    // alarmOn.addEventListener("click", alarmClock.onHandler);
    // var alarmOff = document.getElementById("alarmOff");
    // alarmOff.addEventListener("click", alarmClock.offHandler);
  },
};

document.addEventListener("DOMContentLoaded", function () {
  alarmClock.setup();
  alarmClock.onHandler();
});

// function getActiveBtn(e) {
//   var elems = document.querySelectorAll(".active");
//   [].forEach.call(elems, function (el) {
//     el.classList.remove("active");
//   });
//   e.target.className = "btn active";
// }

// commented code is to be used on second version to On/Off Audio
