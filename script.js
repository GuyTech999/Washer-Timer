// เก็บตัวแปรไว้เพื่อเคลียร์ timer
const countdownTimers = {};

function toggleBooking(machineId) {
  const machine = document.getElementById(machineId);
  const statusText = machine.querySelector('.status-text');
  const button = machine.querySelector('button');
  const timeInfo = machine.querySelector('.time-info');
  const startTimeSpan = machine.querySelector('.start-time');
  const endTimeSpan = machine.querySelector('.end-time');
  const countdownElem = machine.querySelector('.countdown');

  if (statusText.textContent === 'ว่าง') {
    // เริ่มการจอง
    const now = new Date();
    const end = new Date(now.getTime() + 1 * 60000); // 30 นาที

    statusText.textContent = 'ไม่ว่าง';
    statusText.style.color = 'red';
    button.textContent = 'ยกเลิกการจอง';
    timeInfo.style.display = 'block';
    startTimeSpan.textContent = now.toLocaleTimeString();
    endTimeSpan.textContent = end.toLocaleTimeString();

    // เริ่มนับถอยหลัง
    if (countdownTimers[machineId]) {
      clearInterval(countdownTimers[machineId]);
    }

    countdownTimers[machineId] = setInterval(() => {
      const nowTime = new Date();
      const diff = end - nowTime;

      if (diff <= 0) {
        clearInterval(countdownTimers[machineId]);
        countdownElem.textContent = 'หมดเวลาแล้ว!';
        statusText.textContent = 'ว่าง';
        statusText.style.color = 'green';
        button.textContent = 'จองเครื่อง';
        timeInfo.style.display = 'none';
      } else {
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        countdownElem.textContent = `เหลือเวลา: ${minutes} นาที ${seconds < 10 ? '0' : ''}${seconds} วินาที`;
      }
    }, 1000);

  } else {
    // ยกเลิกการจอง
    statusText.textContent = 'ว่าง';
    statusText.style.color = 'green';
    button.textContent = 'จองเครื่อง';
    timeInfo.style.display = 'none';
    countdownElem.textContent = '';

    // หยุดนับถอยหลัง
    if (countdownTimers[machineId]) {
      clearInterval(countdownTimers[machineId]);
    }
  }
}

// เล่นเสียง
const alertSound = document.getElementById('alertSound');
if (alertSound) {
  alertSound.play();
}

if (diff <= 0) {
  clearInterval(countdownTimers[machineId]);
  countdownElem.textContent = 'หมดเวลาแล้ว!';
  statusText.textContent = 'ว่าง';
  statusText.style.color = 'green';
  button.textContent = 'จองเครื่อง';
  timeInfo.style.display = 'none';

  // ✅ เล่นเสียง
  const alertSound = document.getElementById('alertSound');
  if (alertSound) {
    alertSound.play();
  }
}
