let timer;
let isRunning = false;
let elapsedTime = 0;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

startStopBtn.addEventListener('click', function() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
});

function updateTime() {
  elapsedTime++;
  const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
  const seconds = (elapsedTime % 60).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}