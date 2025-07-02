function toggleBooking(machineId) {
    const machine = document.getElementById(machineId);
    const statusText = machine.querySelector('.status-text');
    const button = machine.querySelector('button');
    const timeInfo = machine.querySelector('.time-info');
    const startTimeSpan = machine.querySelector('.start-time');
    const endTimeSpan = machine.querySelector('.end-time');
  
    if (statusText.textContent === 'ว่าง') {
      // จองเครื่อง
      const now = new Date();
      const end = new Date(now.getTime() + 30 * 60000); // 30 นาทีต่อเครื่อง
  
      statusText.textContent = 'ไม่ว่าง';
      statusText.style.color = 'red';
      button.textContent = 'ยกเลิกการจอง';
      timeInfo.style.display = 'block';
      startTimeSpan.textContent = now.toLocaleTimeString();
      endTimeSpan.textContent = end.toLocaleTimeString();
    } else {
      // ยกเลิกการจอง
      statusText.textContent = 'ว่าง';
      statusText.style.color = 'green';
      button.textContent = 'จองเครื่อง';
      timeInfo.style.display = 'none';
    }
  }