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
console.log('Custom JS file loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    const sections = document.querySelectorAll('.text-3xl.font-bold');
    console.log('Found', sections.length, 'section headings');
    
    sections.forEach((section, index) => {
        if (index === 0) return; // Skip the first one (Chris Larkin)
        
        console.log(`Processing section ${index}:`, section.textContent);
        
        const title = section.textContent.trim();
        section.classList.add('section-title');
        section.setAttribute('data-title', title);
        
        // Wrap the original text in a span
        section.innerHTML = `<span>${title}</span>`;
        
        console.log(`Processed: "${title}"`);
    });

    console.log('Finished processing all sections');
});