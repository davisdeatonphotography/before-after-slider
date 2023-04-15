function initBeforeAfterSlider(containerId, options) {
    const container = document.getElementById(containerId);

    const imageContainer = container.querySelector('.image-container');
    const afterImage = container.querySelector('.after-image');
    const handle = container.querySelector('.handle');
    const handleCircle = container.querySelector('.handle-circle');
    
    let isDragging = false;
    
    function updateSlider(event) {
        const containerRect = imageContainer.getBoundingClientRect();
        const xPos = event.clientX - containerRect.left;
        const percentage = xPos / containerRect.width;
        afterImage.style.width = `${percentage * 100}%`;
        handle.style.left = `${xPos}px`;
        handleCircle.style.marginLeft = `${-20 * (1 - percentage)}px`;
    }
    
    function onMouseDown(event) {
        isDragging = true;
        updateSlider(event);
    }
    
    function onMouseMove(event) {
        if (!isDragging) return;
        updateSlider(event);
    }
    
    function onMouseUp() {
        isDragging = false;
    }
    
    imageContainer.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    imageContainer.addEventListener('touchstart', (event) => {
        onMouseDown(event.touches[0]);
    });
    
    imageContainer.addEventListener('touchmove', (event) => {
        onMouseMove(event.touches[0]);
    });
    
    imageContainer.addEventListener('touchend', onMouseUp);
}

initBeforeAfterSlider('before-after-slider', {
    beforeImage: 'https://live.staticflickr.com/65535/52802232602_4155f5911d_5k.jpg',
    afterImage: 'https://live.staticflickr.com/65535/52802795271_460c894931_5k.jpg',
    title: 'Photo Name',
    description: 'Photo Description'
});
