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

// 使用 Google Analytics Reporting API 获取访问量
document.addEventListener('DOMContentLoaded', function() {
    const GA_PROPERTY_ID = '487863193'; // 正确的 property ID
    
    fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runReport`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ya29.c.c0ASRK0GZR0SXTYmS-quEawYOXF7v4Kx0Y43tR2H8A826-89yiK50g11gH1y09hn4qDCAfJduncGPNBB2352KkoXUxU65n-1nv_vd3s1QxzlE_z-mNZikN_-ycyOQ9FCXRvmSfeEiFgVTJlroOu2E5Ktg3M9hmzY9WuG-I6tySCon976QWxvoHydSK__yLCaVzpXCzK9lO4w599PEkGApN7eb2QQ85NJp2cqu6XOwbrrs7FvnEloqg95H7I41nola1e2NIUx2P3ARF8BGQ6_eNiSPZr1kuADIvevxsc7crIyRYnxe0iKtsRcQ41_Z3DyXi2ruyfJDu2k3D9r9R4QUV62RqQmqPnKz2IDMaWkp3zPitF_TP6g7LLhAT384Pgy0xqUtju3daQI8FsJfqhgnSb3orx7SuUpM_h88smvqRIwkc5BMOVWzvr30Y935zJwOkuzRfSdM2Bdj8wppiZ0Ig9Jo5WBYVnR169j4YqtfZacI6tlV4qBOQ23oqk0cvvQVY8p-d_nnsYr9bQwqikwxZ_zVOe_UbF1dWtQkvu09QJRX3Fatgf9yBWtv_FhI4YX7eF3lcuieeo_wJr-QrBye2emSvdUbXj9JRtSMB-e8Jwm-jOgzblzjaWb9kmi2ZJx43qXVum84Qg1sOp1tsflJXZ1xZBQ_FZmkxdQU80v1U4IoyzBFuRJ8oUxqOsg7o2WZ-fUFeQatQ7_-mkbe7s2o7p36sXajbupl5dkvvkzY7tU0sO2r6p1BisxmRynz-tzR_fJt2U4a4i9if2S9Bv7mctU7Wy9d37omwsBgben7oi24In5p547fqYtbM5Yp5IQxfsrnRXgZ0rkQmnxyzz3ubUMfwus6vIq2rqM9IcMu-_-axkJd-B76h317lq7S33SUq370eXYuIUZ1b9Ocpamp0yOqIg_XwdcrdwRfhtYwSQJfwQhkctvZf1nu2-54yZZRl_SmaOs5lsnxp3vFo_YR5ZUktUI3V6u3_u3y1WFJ35w_7zhtwesfe5o1',
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
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Analytics data:', data); // 调试用
        if (data.rows && data.rows[0] && data.rows[0].metricValues && data.rows[0].metricValues[0]) {
            const totalVisitors = data.rows[0].metricValues[0].value;
            document.getElementById('visitorCount').textContent = totalVisitors;
        } else {
            console.error('Unexpected data format:', data);
            document.getElementById('visitorCount').textContent = '0';
        }
    })
    .catch(error => {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitorCount').textContent = '0';
    });
});
