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
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  const sections = document.querySelectorAll('.mb-6.text-3xl.font-bold.text-gray-900.dark\\:text-white, .text-3xl.font-bold');
  console.log('Found', sections.length, 'section headings');
  
  sections.forEach((section, index) => {
      // Exclude CV sections based on their container's ID or class
      if (section.closest('#cv-page') || section.closest('.blox-resume-skills') || section.closest('.blox-resume-awards')) {
          return;
      }

      // Proceed with modifications for other sections
      const container = document.createElement('div');
      container.className = 'section-container';
      
      // Move the section title into the container
      container.appendChild(section.cloneNode(true));
      section.classList.add('section-title');
      
      // Create a div for the content
      const contentDiv = document.createElement('div');
      contentDiv.className = 'section-content';
      container.appendChild(contentDiv);
      
      // Move all following siblings until the next section into this container
      let nextElement = section.nextElementSibling;
      while (nextElement && !nextElement.matches('.mb-6.text-3xl.font-bold.text-gray-900.dark\\:text-white, .text-3xl.font-bold')) {
          const temp = nextElement.nextElementSibling;
          contentDiv.appendChild(nextElement);
          nextElement = temp;
      }
      
      // Replace the original section with our new container
      section.parentNode.replaceChild(container, section);

      console.log(`Processed: "${section.textContent.trim()}"`);
  });

  console.log('Finished processing all sections');
});



