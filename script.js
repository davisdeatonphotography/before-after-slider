document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.slider-container');
  const afterImg = document.querySelector('.after-img');
  const handle = document.querySelector('.handle');
  const handleContainer = document.querySelector('.handle-container');
  const sliderBar = document.createElement('div');
  sliderBar.className = 'slider-bar';
  sliderContainer.appendChild(sliderBar);

  function updateSlider(e) {
    const rect = sliderContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = sliderContainer.clientWidth;
    const position = offsetX / width;
    afterImg.style.clipPath = `inset(0 ${100 - position * 100}% 0 0)`;
    sliderBar.style.left = `${position * 100}%`;
  }

  handleContainer.addEventListener('mousemove', updateSlider);

  handleContainer.addEventListener('mouseleave', function () {
    afterImg.style.clipPath = 'inset(0 70% 0 0)';
    sliderBar.style.left = '30%';
  });

  handleContainer.addEventListener('mouseenter', function () {
    afterImg.style.clipPath = 'inset(0 50% 0 0)';
    sliderBar.style.left = '50%';
  });
});
