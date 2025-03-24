let timer = null;
let seconds = 0;

const updateTime = () => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  document.getElementById('time').textContent = formattedTime;
};

document.getElementById('start').addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds += 1;
      updateTime();
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateTime();
});

// Initialize the timer display
updateTime();
