// ADD SMOOTH SCROLL FUNCTIONALITY TO DIFFERENT PARTS OF HOME PAGE

// Execute when the DOM is fully loaded
window.addEventListener('load', function() {
    function handleNavigation(e) {
      const href = this.getAttribute('href');
  
      // Handle navigation for home and section links
      if (href === '/' || href.startsWith('/#')) {
        e.preventDefault();
        
        // If not on home page, navigate to it first
        if (window.location.pathname !== '/') {
          window.location.href = href;
          return;
        }
  
        // Determine the target element to scroll to
        const targetId = href === '/' ? 'top' : href.substring(2);
        const targetElement = targetId === 'top' ? document.body : document.getElementById(targetId);
  
        // Perform smooth scrolling
        if (targetElement) {
          if (targetId === 'top') {
            // Scroll to the top of the page
            window.scrollTo({top: 0, behavior: 'smooth'});
          } else {
            // Scroll to the specific section
            targetElement.scrollIntoView({behavior: 'smooth'});
          }
        }
      }
    }
  
    // Attach event listeners to all navigation links
    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
      link.addEventListener('click', handleNavigation);
    });
  });

// MOVE SECTION TITLES TO LEFT OF HOME SCREEN
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const titles = document.querySelectorAll('.sticky-title');

  window.addEventListener('scroll', function () {
      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const title = titles[index];
          if (rect.top <= 0 && rect.bottom >= 0) {
              title.classList.add('visible');
          } else {
              title.classList.remove('visible');
          }
      });
  });
});
