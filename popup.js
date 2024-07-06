let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

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
 alert('Hello world!');