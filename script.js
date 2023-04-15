const slider = document.querySelector('.slider');
const handle = document.querySelector('.handle');
const beforeImage = document.querySelector('.before-image');
const imageContainer = document.querySelector('.image-container');

let dragging = false;
let containerWidth = imageContainer.clientWidth;

function updateSlider(x) {
    const percentage = (x / containerWidth) * 100;
    beforeImage.style.width = `${percentage}%`;
    handle.style.left = `${x}px`;
}

function onMouseDown(event) {
    event.preventDefault();
    dragging = true;
}

function onMouseMove(event) {
    if (!dragging) return;
    const x = Math.max(0, Math.min(event.pageX - imageContainer.getBoundingClientRect().left, containerWidth));
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
    const x = Math.max(0, Math.min(event.touches[0].pageX - imageContainer.getBoundingClientRect().left, containerWidth));
    updateSlider(x);
}

function onTouchEnd() {
    dragging = false;
}

handle.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

handle.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('touchend', onTouchEnd);

window.addEventListener('resize', () => {
    containerWidth = imageContainer.clientWidth;
});
