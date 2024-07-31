window.addEventListener('load', function() {
    console.log('Custom script loaded');
  
    function smoothScroll(e) {
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
        window.location.href = href;
      }
    }
  
    const menuLinks = document.querySelectorAll('nav a');
    console.log('Found menu links:', menuLinks.length);
  
    menuLinks.forEach(link => {
      console.log('Adding listener to:', link.href);
      link.addEventListener('click', smoothScroll);
    });
  });