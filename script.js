document.addEventListener('DOMContentLoaded', function () {
  const imagesContainer = document.querySelector('.images-container');
  const afterImage = document.querySelector('.after-image');
  const slider = document.querySelector('.slider');

  function updateSliderPosition(event) {
    const rect = imagesContainer.getBoundingClientRect();
    const mouseXPercentage = ((event.clientX || event.touches[0].clientX) - rect.left) / rect.width;
    const clipWidth = rect.width * mouseXPercentage;
    afterImage.style.clipPath = `inset(0 ${rect.width - clipWidth}px 0 0)`;
    slider.style.left = `${clipWidth}px`;
  }

  imagesContainer.addEventListener('mousemove', updateSliderPosition);
  imagesContainer.addEventListener('touchmove', updateSliderPosition);
  imagesContainer.addEventListener('touchstart', updateSliderPosition);
});
