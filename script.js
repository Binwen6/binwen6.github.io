document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlEl.classList.add(savedTheme);
    } else {
        // If no theme is saved, use system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            htmlEl.classList.add('dark');
        }
    }

    themeToggle.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        const currentTheme = htmlEl.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // --- Sticky Header ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('not-top');
        } else {
            header.classList.remove('not-top');
        }
    });

    // --- Click Particle Effect ---
    function createParticle(x, y, angle, distance, colorClass) {
        const particle = document.createElement('div');
        particle.className = `click-particle ${colorClass}`;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        const size = Math.random() * 6 + 8;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        document.body.appendChild(particle);
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1100);
    }

    document.addEventListener('click', (e) => {
        const colors = [
            'color-blue-400', 'color-purple-400', 'color-indigo-400',
            'color-pink-400', 'color-red-400', 'color-yellow-400'
        ];
        for (let i = 0; i < 10; i++) {
            const angle = (Math.PI * 2 / 10) * i;
            const distance = 18 + Math.random() * 8;
            const colorClass = colors[i % colors.length];
            setTimeout(() => {
                createParticle(e.clientX, e.clientY, angle, distance, colorClass);
            }, i * 12);
        }
    });
    
    // --- Fun Tab Title Change ---
    const originalTitle = document.title;
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            document.title = "🤖 Come back soon!";
        } else {
            document.title = originalTitle;
        }
    });

    // --- Search Logic (only runs on search.html) ---
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        let searchIndex = [];

        // Fetch the search index
        fetch('search-index.json')
            .then(response => response.json())
            .then(data => {
                searchIndex = data;
            });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            searchResults.innerHTML = '';

            if (query.length < 2) {
                searchResults.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">Please enter at least 2 characters to search.</p>';
                return;
            }

            const results = searchIndex.filter(item => {
                return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
            });

            if (results.length > 0) {
                results.forEach(result => {
                    const resultElement = document.createElement('a');
                    resultElement.href = result.url;
                    resultElement.className = 'block p-4 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-light-accent dark:hover:border-dark-accent transition-all duration-300';
                    
                    let contentSnippet = result.content.substring(0, 150);
                    if (result.content.length > 150) {
                        contentSnippet += '...';
                    }

                    resultElement.innerHTML = `
                        <h3 class="font-bold text-lg text-light-text dark:text-white">${result.title}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">${contentSnippet}</p>
                    `;
                    searchResults.appendChild(resultElement);
                });
            } else {
                searchResults.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">No results found.</p>';
            }
        });
    }
});
