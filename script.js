document.addEventListener('DOMContentLoaded', () => {
    // Example of a simple event listener
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert('You are leaving the page to visit ' + link.getAttribute('href'));
        });
    });
});
