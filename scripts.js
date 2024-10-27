document.addEventListener('DOMContentLoaded', () => {
  // Animated Counters
  const counters = document.querySelectorAll('.counter');
  counters.forEach((counter) => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });

  // Filtering Projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      projectCards.forEach((card) => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Testimonial Carousel
  const testimonials = document.querySelector('.testimonial-slider');
  let index = 0;
  setInterval(() => {
    index++;
    if (index >= testimonials.children.length) {
      index = 0;
    }
    testimonials.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
});
