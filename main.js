import './style.css'

function updateUTCTime() {
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const updateTime = () => {
    const now = new Date();
    timeElement.textContent = now.toUTCString();
  };
  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', updateUTCTime);