document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


var startTime, currentTime, elapsedTime = 0;
var timerInterval;
var isRunning = false;
var display = document.getElementById('display');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var holdButton = document.getElementById('holdButton');

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10); // Update time every 10 milliseconds
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    holdButton.disabled = false;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    holdButton.disabled = true;
  }
}

function hold() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    holdButton.textContent = 'Resume';
  } else {
    start();
    holdButton.textContent = 'Hold';
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  holdButton.disabled = true;
  holdButton.textContent = 'Hold';
}

function updateTime() {
  currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  var hours = Math.floor(time / 3600000);
  var minutes = Math.floor((time % 3600000) / 60000);
  var seconds = Math.floor((time % 60000) / 1000);
  var milliseconds = Math.floor(time % 1000 / 10);

  return (
    pad(hours, 2) + ':' +
    pad(minutes, 2) + ':' +
    pad(seconds, 2) + ':' +
    pad(milliseconds, 2)
  );
}

function pad(num, size) {
  var s = num + '';
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
}
