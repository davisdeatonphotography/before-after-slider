document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.slider-container');
  const afterImg = document.querySelector('.after-img');
  const handle = document.querySelector('.handle');
  const handleContainer = document.querySelector('.handle-container');

  function updateSlider(e) {
    const rect = sliderContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = sliderContainer.clientWidth;
    const position = offsetX / width;
    afterImg.style.clipPath = `inset(0 ${100 - position * 100}% 0 0)`;
    handle.style.left = `${position * 100}%`;
  }

  handleContainer.addEventListener('mousedown', function () {
    handleContainer.addEventListener('mousemove', updateSlider);
  });

  handleContainer.addEventListener('mouseup', function () {
    handleContainer.removeEventListener('mousemove', updateSlider);
  });

  handleContainer.addEventListener('mouseleave', function () {
    handleContainer.removeEventListener('mousemove', updateSlider);
  });
});
