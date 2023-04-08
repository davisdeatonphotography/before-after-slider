document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.slider-container');
  const beforeImage = document.querySelector('.before-image');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = container.offsetWidth;
    const percent = x / containerWidth;

    beforeImage.style.width = `${percent * 100}%`;
  });
});
