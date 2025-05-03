document.addEventListener('DOMContentLoaded', () => {
    // Example of a simple event listener
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert('You are leaving the page to visit ' + link.getAttribute('href'));
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation items based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Add animation to project and research cards
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .research-card, .skills-card, .award-card').forEach(card => {
    observer.observe(card);
});

// Add smooth fade-in animation for sections
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// 使用 Google Analytics API 获取访问量
document.addEventListener('DOMContentLoaded', function() {
    const GA_MEASUREMENT_ID = 'G-BLLQR6VZCC';
    
    console.log('Starting Google Analytics API call...');
    
    // 使用 gtag 配置和事件
    gtag('config', GA_MEASUREMENT_ID, {
        'send_page_view': true,
        'anonymize_ip': true
    });
    
    // 获取访问量
    gtag('event', 'page_view', {
        'event_callback': function() {
            // 使用 gtag 的回调来获取访问量
            gtag('get', GA_MEASUREMENT_ID, 'clientId', function(clientId) {
                console.log('Client ID:', clientId);
                // 这里我们可以使用 clientId 来跟踪访问量
                let count = localStorage.getItem('ga_visitor_count');
                if (!count) {
                    count = 0;
                }
                count = parseInt(count) + 1;
                localStorage.setItem('ga_visitor_count', count);
                document.getElementById('visitorCount').textContent = count;
            });
        }
    });
});
