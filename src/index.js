import './styles.css';

export function createCarousel(containerSelector, images) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Container not found for selector: ${containerSelector}`);
    return;
  }
  container.classList.add('carousel');

  // Slides wrapper
  const slidesWrapper = document.createElement('div');
  slidesWrapper.classList.add('slides');
  container.appendChild(slidesWrapper);

  // Create slides
  images.forEach((img) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url(${img})`;
    slidesWrapper.appendChild(slide);
  });

  // Navigation arrows
  const leftArrow = document.createElement('button');
  leftArrow.classList.add('arrow', 'left');
  leftArrow.innerHTML = '&#10094;';
  container.appendChild(leftArrow);

  const rightArrow = document.createElement('button');
  rightArrow.classList.add('arrow', 'right');
  rightArrow.innerHTML = '&#10095;';
  container.appendChild(rightArrow);

  // Dots navigation
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots');
  container.appendChild(dotsContainer);

  images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;
  const totalSlides = images.length;
  const dots = dotsContainer.querySelectorAll('.dot');

  function updateCarousel() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  rightArrow.addEventListener('click', nextSlide);
  leftArrow.addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
}
