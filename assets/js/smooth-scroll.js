document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav a');
    
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip smooth scroll for external links, Home, and CV
        if (!href.startsWith('#') || href === '#' || this.classList.contains('no-smooth-scroll')) {
          return;
        }
        
        e.preventDefault();
        
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });