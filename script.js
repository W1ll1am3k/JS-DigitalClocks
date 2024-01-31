const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const updateTime = () => {
  const currentTime = new Date();
  const formattedHours = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
  const formattedMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
  const formattedSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();

  hoursEl.innerHTML = formattedHours;
  minutesEl.innerHTML = formattedMinutes;
  secondsEl.innerHTML = formattedSeconds;
};

setInterval(updateTime, 1000); // Update the time every second
