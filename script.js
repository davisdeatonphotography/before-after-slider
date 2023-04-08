const sliderContainer = document.querySelector('.slider-container');
const beforeImage = document.querySelector('.before-image');
const sliderBar = document.createElement('div');
sliderBar.className = 'slider-bar';
sliderContainer.appendChild(sliderBar);

sliderContainer.addEventListener('mousemove', (event) => {
  const offsetX = event.clientX - sliderContainer.getBoundingClientRect().left;
  const width = sliderContainer.clientWidth;
  const percentage = (offsetX / width) * 100;

  beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  sliderBar.style.left = `${offsetX}px`;
});

sliderContainer.addEventListener('mouseleave', () => {
  beforeImage.style.clipPath = 'inset(0 50% 0 0)';
  sliderBar.style.left = '50%';
});

