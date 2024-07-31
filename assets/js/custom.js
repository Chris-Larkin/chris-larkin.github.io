window.addEventListener('load', function() {
    console.log('Custom script loaded');
  
    function handleNavigation(e) {
      const href = this.getAttribute('href');
      console.log('Clicked link:', href);
  
      if (href.startsWith('/#')) {
        e.preventDefault();
        console.log('Navigating to home page section:', href);
        
        // If we're not on the home page, navigate there first
        if (window.location.pathname !== '/') {
          window.location.href = href;
          return;
        }
  
        // We're on the home page, so scroll to the section
        const targetId = href.substring(2); // Remove '/#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          console.log('Scrolling to:', targetId);
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          console.log('Target element not found:', targetId);
        }
      }
    }
  
    const menuLinks = document.querySelectorAll('nav a[href^="/#"]');
    console.log('Found menu links:', menuLinks.length);
  
    menuLinks.forEach(link => {
      console.log('Adding listener to:', link.href);
      link.addEventListener('click', handleNavigation);
    });
  });