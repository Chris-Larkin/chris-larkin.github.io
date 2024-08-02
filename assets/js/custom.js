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
    
    const sections = document.querySelectorAll('.mb-6.text-3xl.font-bold.text-gray-900.dark\\:text-white, .text-3xl.font-bold');
    console.log('Found', sections.length, 'section headings');
    
    sections.forEach((section, index) => {
        if (index === 0) return; // Skip the first one (likely the main title)
        
        console.log(`Processing section ${index}:`, section.textContent);
        
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

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('.section-container').forEach((container) => {
            const title = container.querySelector('.section-title');
            const content = container.querySelector('.section-content');
            
            const containerTop = container.offsetTop;
            const containerBottom = containerTop + container.offsetHeight;
            
            if (scrollPosition >= containerTop && scrollPosition < containerBottom) {
                const maxScroll = content.offsetHeight - title.offsetHeight;
                const scroll = Math.min(scrollPosition - containerTop, maxScroll);
                title.style.transform = `translateY(${scroll}px)`;
            }
        });
    });

    console.log('Finished processing all sections');
});