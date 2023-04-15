const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.after-image');
const sliderHandle = document.querySelector('.slider-handle');
const sliderContainer = document.querySelector('.slider-container');

let isDragging = false;

function updateSlider(x) {
  let width = sliderContainer.clientWidth;
  let position = Math.max(0, Math.min(x, width));
  let percentage = (position / width) * 100;
  afterImage.style.clipPath = `inset(0 ${percentage}% 0 0)`;
  slider.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.3) ${percentage}%, transparent ${percentage}%)`;
  sliderHandle.style.left = `${percentage}%`;
}

slider.addEventListener('mousedown', () => {
  isDragging = true;
});

slider.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  let x = event.clientX - sliderContainer.getBoundingClientRect().left;
  updateSlider(x);
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
});

slider.addEventListener('touchstart', () => {
  isDragging = true;
}, { passive: true });

slider.addEventListener('touchmove', (event) => {
  if (!isDragging) return;
  let x = event.touches[0].clientX - sliderContainer.getBoundingClientRect().left;
  updateSlider(x);
}, { passive: true });

slider.addEventListener('touchend', () => {
  isDragging = false;
}, { passive: true });

slider.addEventListener('touchcancel', () => {
  isDragging = false;
}, { passive: true });
