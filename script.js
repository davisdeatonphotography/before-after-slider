
### JavaScript Functionality
```javascript
document.addEventListener('DOMContentLoaded', function () {
  const imageComparison = document.querySelector('.image-comparison');
  const afterImage = document.querySelector('.after-image');
  const slider = document.querySelector('.slider');

  function updateSliderPosition(event) {
    const rect = imageComparison.getBoundingClientRect();
    const mouseXPercentage = ((event.clientX || event.touches[0].clientX) - rect.left) / rect.width;
    const clipWidth = rect.width * mouseXPercentage;
    afterImage.style.clipPath = `inset(0 ${rect.width - clipWidth}px 0 0)`;
    slider.style.left = `${clipWidth}px`;
  }

  imageComparison.addEventListener('mousemove', updateSliderPosition);
  imageComparison.addEventListener('touchmove', updateSliderPosition);
});
