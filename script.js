document.addEventListener('DOMContentLoaded', function () {
  const imageComparison = document.querySelector('.image-comparison');
  const afterImage = document.querySelector('.after-image');
  const slider = document.querySelector('.slider');

  imageComparison.addEventListener('mousemove', function (event) {
    const rect = imageComparison.getBoundingClientRect();
    const mouseXPercentage = (event.clientX - rect.left) / rect.width;
    const clipWidth = rect.width * mouseXPercentage;
    afterImage.style.clipPath = `inset(0 ${rect.width - clipWidth}px 0 0)`;
    slider.style.left = `${clipWidth}px`;
  });
});
