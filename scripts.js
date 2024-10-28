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
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your user ID
    emailjs.init("NgIjOyd74rqQfeije"); // Replace with your actual public key

    // Form submission handling
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Send the email using EmailJS
        emailjs.sendForm('service_ucn8i03', 'template_gbk8t29', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                document.getElementById("contact-form").reset(); // Reset the form after submission
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was a problem sending the message.');
            });
    });
});
