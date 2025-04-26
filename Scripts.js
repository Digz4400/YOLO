function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));
  evt.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

let isDragging = false;
let offsetX = 0, offsetY = 0;
let currentImg = null;

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('Bracket')) {
    isDragging = true;
    currentImg = e.target;
    const rect = currentImg.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    currentImg.style.cursor = 'grabbing';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  if (currentImg) {
    currentImg.style.cursor = 'grab';
    currentImg = null;
  }
});

document.addEventListener('mousemove', (e) => {
  if (isDragging && currentImg) {
    const container = currentImg.parentElement;
    const containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    currentImg.style.left = `${x}px`;
    currentImg.style.top = `${y}px`;
  }
});