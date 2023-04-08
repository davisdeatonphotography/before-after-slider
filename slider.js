const sliderContainer = document.querySelector('.slider-container');
const beforeImage = document.querySelector('.before-image');

sliderContainer.addEventListener('mousemove', (event) => {
  const offsetX = event.clientX - sliderContainer.getBoundingClientRect().left;
  const width = sliderContainer.clientWidth;
  const percentage = (offsetX / width) * 100;

  beforeImage.style.width = `${percentage}%`;
});

sliderContainer.addEventListener('mouseleave', () => {
  beforeImage.style.width = '50%';
});
