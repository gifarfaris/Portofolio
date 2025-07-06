
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
  } else {
      navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Animate progress bars when they come into view
const progressObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.progress-bar');
          if (progressBar) {
              const width = progressBar.style.width;
              progressBar.style.width = '0%';
              setTimeout(() => {
                  progressBar.style.width = width;
              }, 500);
          }
      }
  });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(el => {
  progressObserver.observe(el);
});

// Active navigation highlighting
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
      }
  });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
      }
  }
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
      const originalText = heroTitle.textContent;
      typeWriter(heroTitle, originalText, 150);
  }
});

// Portfolio video lazy loading
const videos = document.querySelectorAll('.portfolio-video');
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const video = entry.target;
          // You can add video source here when you have actual video files
          video.load();
          videoObserver.unobserve(video);
      }
  });
});

videos.forEach(video => {
  videoObserver.observe(video);
});

// Contact form animation (if you add a form later)
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

// Mobile menu close on link click
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
      }
  });
});