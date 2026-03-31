function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = 'AM';

  if (hours >= 12) ampm = 'PM';
  if (hours > 12) hours = hours - 12;
  if (hours === 0) hours = 12;

  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  document.getElementById('clockH').textContent = hours;
  document.getElementById('clockM').textContent = minutes;
  document.getElementById('clockS').textContent = seconds;
  document.getElementById('ampm').textContent = ampm;
  document.getElementById('dateDisplay').textContent = now.toDateString();
  setTimeout(updateClock, 1000);
}
updateClock();
let swTimer;
let isRunning = false;
let swHundredths = 0;
let swSeconds = 0;
let swMinutes = 0;

const swM = document.getElementById('swM');
const swS = document.getElementById('swS');
const swMs = document.getElementById('swMs');
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');

function pad(n) {
  if (n < 10) return '0' + n;
  return n.toString();
}

function renderStopwatch() {
  swM.textContent = pad(swMinutes);
  swS.textContent = pad(swSeconds);
  swMs.textContent = pad(swHundredths);
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  swTimer = setInterval(function () {
    swHundredths++;
    if (swHundredths === 100) {
      swHundredths = 0;
      swSeconds++;
    }
    if (swSeconds === 60) {
      swSeconds = 0;
      swMinutes++;
    }
    renderStopwatch();
  }, 10);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function stopStopwatch() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(swTimer);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

function resetStopwatch() {
  stopStopwatch();
  swHundredths = 0;
  swSeconds = 0;
  swMinutes = 0;
  renderStopwatch();
}

btnStart.addEventListener('click', startStopwatch);
btnStop.addEventListener('click', stopStopwatch);
btnReset.addEventListener('click', resetStopwatch);
