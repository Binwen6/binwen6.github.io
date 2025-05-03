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
    // 这里需要替换为你的 Google Analytics 测量 ID
    const GA_MEASUREMENT_ID = 'G-BLLQR6VZCC';
    
    // 使用 Google Analytics Reporting API 获取访问量
    // 注意：这需要设置适当的 API 密钥和认证
    fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA_MEASUREMENT_ID}:runReport`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dateRanges: [{
                startDate: '2025-01-01',
                endDate: 'today'
            }],
            metrics: [{
                name: 'totalUsers'
            }]
        })
    })
    .then(response => response.json())
    .then(data => {
        const totalVisitors = data.rows[0].metricValues[0].value;
        document.getElementById('visitorCount').textContent = totalVisitors;
    })
    .catch(error => {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitorCount').textContent = 'N/A';
    });
});
