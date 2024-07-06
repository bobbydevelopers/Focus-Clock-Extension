let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

/**
 * Handles the start/pause functionality of the timer.
 * When the 'Start' button is clicked, it starts the timer and changes the button text to 'Pause'.
 * When the 'Pause' button is clicked, it stops the timer and changes the button text back to 'Start'.
 */
document.getElementById('start').addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('start').textContent = 'Start';
  } else {
    timer = setInterval(updateTimer, 1000);
    document.getElementById('start').textContent = 'Pause';
  }
  isRunning = !isRunning;
});

/**
 * Resets the timer to its initial state of 25 minutes and 0 seconds.
 * Stops the timer if it is currently running, and updates the UI to reflect the reset state.
 */
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);
  document.getElementById('start').textContent = 'Start';
});

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      alert("Time's up!");
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
 