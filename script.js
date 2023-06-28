// Timer
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

function startTimer() {
  const inputElement = document.getElementById('timerInput');
  const duration = parseInt(inputElement.value);

  if (!timerRunning && !isNaN(duration)) {
    timerRunning = true;
    timerSeconds = duration;
    displayTime('timer', timerSeconds);
    timerInterval = setInterval(decrementTimer, 1000);
  }
}

function stopTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  displayTime('timer', timerSeconds);
  document.getElementById('timerInput').value = '';
}

function decrementTimer() {
  if (timerSeconds > 0) {
    timerSeconds--;
    displayTime('timer', timerSeconds);
  } else {
    stopTimer();
    alert('Timer finished!');
  }
}

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(incrementStopwatch, 1000);
  }
}

function stopStopwatch() {
  if (stopwatchRunning) {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
  }
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;
  displayTime('stopwatch', stopwatchSeconds);
}

function incrementStopwatch() {
  stopwatchSeconds++;
  displayTime('stopwatch', stopwatchSeconds);
}

// Common function to display time for both timer and stopwatch
function displayTime(type, seconds) {
  const displayElement = document.getElementById(`${type}Display`);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  displayElement.textContent = formattedTime;
}

// Helper function to add leading zero to single-digit numbers
function pad(number) {
  return number.toString().padStart(2, '0');
}