const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const leftButton = carousel.querySelector('.left-btn');
  const rightButton = carousel.querySelector('.right-btn');
  const itemWidth = 170; // Width of each item plus margin

  let position = 0;

  rightButton.addEventListener('click', () => {
    position -= itemWidth;
    if (position < -(track.children.length - 5) * itemWidth) {
      position = 0; // Reset to start
    }
    track.style.transform = `translateX(${position}px)`;
  });

  leftButton.addEventListener('click', () => {
    position += itemWidth;
    if (position > 0) {
      position = -(track.children.length - 5) * itemWidth; // Go to end
    }
    track.style.transform = `translateX(${position}px)`;
  });
});
