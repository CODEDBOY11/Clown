document.addEventListener("DOMContentLoaded", () => {
  // Function to start counting up to the target number
  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 700; // Adjust speed here
    let count = 0;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.innerText = `${Math.ceil(count)}`;
        setTimeout(updateCounter, 50); // Adjust delay here
      } else {
        counter.innerText = target; // Ensure it ends on the exact target number
      }
    };
    updateCounter();
  };

  // Initialize IntersectionObserver
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry.target); // Start counting when in view
          observer.unobserve(entry.target); // Stop observing to prevent re-triggering
        }
      });
    },
    { threshold: 0.1 } // Adjust threshold if needed
  );

  // Start observing each counter element
  counters.forEach((counter) => {
    counter.innerText = "0"; // Reset counter text initially to 0
    counterObserver.observe(counter);
  });
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
    event.preventDefault(); // Prevent the default form submission

    // Send the email using EmailJS
    emailjs.sendForm("service_ucn8i03", "template_gbk8t29", this)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form after submission
      })
      .catch(function (error) {
        console.log("FAILED...", error);
        alert("There was a problem sending the message.");
      });
  });

  // Observer for image slide-in effect
  const picture = document.querySelector(".about-picture");

  if (picture) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            picture.classList.add("slide-in");
          } else {
            picture.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in view
    );

    observer.observe(picture);
  }
});
