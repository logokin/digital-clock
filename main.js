function showTime() {
  let date = new Date();
  let hours = date.getHours(); //0-23
  let minutes = date.getMinutes(); //0-59
  let seconds = date.getSeconds(); //0-59

  let convertFormat = convert(hours);

  //function for time
  hours = checkTime(hours);

  hours = addzero(hours);
  minutes = addzero(minutes);
  seconds = addzero(seconds);

  document.getElementById(
    "clock"
  ).innerHTML = `${hours}:${minutes}:${seconds}${convertFormat}`;
}

function convert(time) {
  let format = "am";
  if (time >= 12) {
    format = "pm";
  }
  return format;
}

//hour function = this helps to set the hours between 0 - 12,instead of 0-23
function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }

  return time;
}

function addzero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

showTime();
setInterval(showTime, 1000);

var button = document.querySelector(".button");
var button2 = document.querySelector(".button2");
var press = document.querySelectorAll("button");

var body = document.querySelector("body");
var color = ["black", "white"];

button.addEventListener("click", change);
function change() {
  body.style.backgroundColor = color[0];
}

button2.addEventListener("click", next);
function next() {
  body.style.backgroundColor = color[1];
}

let ok = new Date();
let you = ok.getHours();
let greeting;
if (you > 18) {
  body.style.backgroundColor = "black";
  greeting = "good evening";
} else if (you > 12) {
  body.style.backgroundColor = "white";
  greeting = "good afternoon";
} else if (you > 0) {
  greeting = "good morning";
  body.style.backgroundColor = "white";
} else {
  greeting = "time";
}
