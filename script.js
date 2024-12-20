document.addEventListener("DOMContentLoaded", () => {
  // Function to animate counting up to the target number
  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 400; // Slow counting speed
    let count = 0;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.innerText = `${Math.ceil(count)}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  };

  // Set up IntersectionObserver for counters
  const counters = document.querySelectorAll(".counter");

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.innerText = "0";
        animateCounter(entry.target);
      }
    });
  };

  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });

  // Filtering Projects
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Testimonial Carousel
  const testimonials = document.querySelector(".testimonial-slider");
  let index = 0;
  setInterval(() => {
    index++;
    if (index >= testimonials.children.length) {
      index = 0;
    }
    testimonials.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

  // Initialize EmailJS with your user ID
  emailjs.init("NgIjOyd74rqQfeije"); // Replace with your actual public key

  // Form submission handling
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Send the email using EmailJS
    emailjs.sendForm("service_ucn8i03", "template_gbk8t29", this)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        console.log("FAILED...", error);
        alert("There was a problem sending the message.");
      });
  });

  // Observer for image slide-in effect
  const picture = document.querySelector(".about-picture");

  if (picture) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            picture.classList.add("slide-in");
          } else {
            picture.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    imageObserver.observe(picture);
  }
});
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden"); // Show/hide the menu

      // Toggle hamburger icon between '☰' and '×'
      if (mobileMenu.classList.contains("hidden")) {
        hamburger.innerHTML = "&#9776;"; // Hamburger icon
      } else {
        hamburger.innerHTML = "&times;"; // "X" symbol
      }
    });
