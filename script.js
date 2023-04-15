const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.after-image');
const imageContainer = document.querySelector('.image-container');

let dragging = false;
let containerWidth = imageContainer.clientWidth;

function updateSlider(x) {
  const percentage = (x / containerWidth) * 100;
  afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  slider.style.left = `${x}px`;
}

function onMouseDown(event) {
  event.preventDefault();
  dragging = true;
}

function onMouseMove(event) {
  if (!dragging) return;
  const x = event.pageX - imageContainer.getBoundingClientRect().left;
  updateSlider(x);
}

function onMouseUp() {
  dragging = false;
}

function onTouchStart(event) {
  event.preventDefault();
  dragging = true;
}

function onTouchMove(event) {
  if (!dragging) return;
  const x = event.touches[0].pageX - imageContainer.getBoundingClientRect().left;
  updateSlider(x);
}

function onTouchEnd() {
  dragging = false;
}

slider.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

slider.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('touchend', onTouchEnd);

window.addEventListener('resize', () => {
  containerWidth = imageContainer.clientWidth;
});
