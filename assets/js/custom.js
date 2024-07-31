window.addEventListener('load', function() {
    console.log('Custom script loaded');
  
    function handleNavigation(e) {
      const href = this.getAttribute('href');
      console.log('Clicked link:', href);
  
      if (href === '/' || href.startsWith('/#')) {
        e.preventDefault();
        console.log('Handling navigation for:', href);
        
        // If we're not on the home page, navigate there first
        if (window.location.pathname !== '/') {
          window.location.href = href;
          return;
        }
  
        // We're on the home page, so scroll to the section or top
        const targetId = href === '/' ? 'top' : href.substring(2); // Remove '/#' or use 'top' for home
        const targetElement = targetId === 'top' ? document.body : document.getElementById(targetId);
        if (targetElement) {
          console.log('Scrolling to:', targetId);
          setTimeout(() => {
            if (targetId === 'top') {
              window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
              targetElement.scrollIntoView({behavior: 'smooth'});
            }
          }, 100); // 100ms delay
        } else {
          console.log('Target element not found:', targetId);
        }
      }
    }
  
    const menuLinks = document.querySelectorAll('nav a');
    console.log('Found menu links:', menuLinks.length);
  
    menuLinks.forEach(link => {
      console.log('Adding listener to:', link.href);
      link.addEventListener('click', handleNavigation);
    });
  });