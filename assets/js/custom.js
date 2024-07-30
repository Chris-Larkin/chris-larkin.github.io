console.log('Custom script loaded');

function smoothScroll(e) {
    const href = this.getAttribute('href');
    console.log('Clicked link:', href);

    if (href.startsWith('/#')) {
        e.preventDefault();
        console.log('Preventing default behavior for:', href);

        const targetId = href.replace('/#', '');
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

function attachSmoothScroll() {
    console.log('Attaching smooth scroll');
    const menuLinks = document.querySelectorAll('a[href^="/#"]');
    console.log('Found menu links:', menuLinks.length);

    menuLinks.forEach(link => {
        console.log('Adding listener to:', link.href);
        link.addEventListener('click', smoothScroll);
    });
}

// Try to attach immediately
attachSmoothScroll();

// Also attach when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', attachSmoothScroll);