const sliderContainer = document.querySelector('.slider-container');
const beforeImage = document.querySelector('.before-image');
const sliderBar = document.createElement('div');
sliderBar.className = 'slider-bar';
sliderContainer.appendChild(sliderBar);

sliderContainer.addEventListener('mousemove', (event) => {
  const offsetX = event.clientX - sliderContainer.getBoundingClientRect().left;
  const width = sliderContainer.clientWidth;
  const percentage = (offsetX / width) * 100;

  beforeImage.style.width = `${100 - percentage}%`;
  sliderBar.style.left = `${offsetX}px`;
});

sliderContainer.addEventListener('mouseleave', () => {
  beforeImage.style.width = '50%';
  sliderBar.style.left = '50%';
});
