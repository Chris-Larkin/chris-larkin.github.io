window.addEventListener('load', function() {
    console.log('Custom script loaded');
  
    function handleNavigation(e) {
      const href = this.getAttribute('href');
      console.log('Clicked link:', href);
  
      // Check if the link is to a section on the current page
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
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
      // Check if the link is to a section on the home page
      else if (href.startsWith('/#')) {
        e.preventDefault();
        console.log('Navigating to home page section:', href);
        
        // Navigate to the home page
        window.location.href = '/';
  
        // After a short delay, scroll to the section
        setTimeout(() => {
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
        }, 100); // Adjust this delay if needed
      } else {
        console.log('Regular navigation to:', href);
      }
    }
  
    const menuLinks = document.querySelectorAll('nav a');
    console.log('Found menu links:', menuLinks.length);
  
    menuLinks.forEach(link => {
      console.log('Adding listener to:', link.href);
      link.addEventListener('click', handleNavigation);
    });
  });