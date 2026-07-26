document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('note') || params.get('id');
    if (params.has('note')) {
        const backLink = document.getElementById('post-back-link');
        backLink.href = 'notes.html';
        backLink.textContent = '← All notes';
    }
    
    if (!postId) {
        document.getElementById('single-post-container').innerHTML = '<p>Post not found.</p>';
        return;
    }

    fetch(params.has('note') ? 'blog-index.json' : 'blog.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            const post = (data.notes || data.posts || []).find(p => p.id === postId);
            if (!post) {
                document.getElementById('single-post-container').innerHTML = '<p>Post not found.</p>';
                return;
            }
            renderSinglePost(post);
        })
        .catch(err => {
            console.error('Error loading blog post:', err);
            document.getElementById('single-post-container').innerHTML = '<p>Error loading post.</p>';
        });
});

function renderSinglePost(post) {
    const container = document.getElementById('single-post-container');
    container.innerHTML = '';

    const article = document.createElement('article');
    article.className = 'blog-post single-post';

    renderBreadcrumbs(post);

    const title = document.createElement('h1');
    title.className = 'blog-post-title';
    title.style.fontSize = '2em';
    title.style.marginBottom = '10px';
    title.textContent = post.title;
    article.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'blog-post-meta';

    if (post.path) {
        const path = document.createElement('span');
        path.className = 'blog-post-date';
        path.textContent = post.path;
        meta.appendChild(path);
    } else if (post.date) {
        const date = document.createElement('span');
        date.className = 'blog-post-date';
        date.textContent = formatDate(post.date);
        meta.appendChild(date);
    }

    if (post.tags && post.tags.length > 0) {
        const tags = document.createElement('div');
        tags.className = 'blog-tags';
        post.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'blog-tag';
            span.textContent = tag;
            tags.appendChild(span);
        });
        meta.appendChild(tags);
    }
    article.appendChild(meta);

    // Summary (optional to show in single post)
    // if (post.summary) {
    //     const summary = document.createElement('p');
    //     summary.className = 'blog-post-summary';
    //     summary.textContent = post.summary;
    //     article.appendChild(summary);
    // }

    // Content container
    const content = document.createElement('div');
    content.className = 'blog-post-content markdown-body expanded';
    // Ensure content is visible by forcing display block just in case expanded isn't enough
    content.style.display = 'block'; 
    content.style.webkitLineClamp = 'unset';

    if (post.file) {
        content.innerHTML = '<p>Loading content...</p>';
        article.appendChild(content);
        
        fetch(post.file)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.text();
            })
            .then(md => {
                marked.setOptions({ gfm: true, breaks: false });
                content.innerHTML = DOMPurify.sanitize(marked.parse(md), {
                    ADD_ATTR: ['target']
                });
                content.querySelectorAll('a[href^="http"]').forEach(link => {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                });
                if (window.MathJax && window.MathJax.typesetPromise) {
                    window.MathJax.typesetPromise([content]).catch(error => {
                        console.error('Math rendering failed:', error);
                    });
                }
            })
            .catch(err => {
                console.error('Error loading markdown:', err);
                content.innerHTML = '<p>Error loading content.</p>';
            });
    } else if (post.content) {
        content.innerHTML = post.content;
        article.appendChild(content);
    }

    container.appendChild(article);
    
    // Update page title
    document.title = post.title + ' - Binwen Liu';
}

function renderBreadcrumbs(post) {
    const container = document.getElementById('note-breadcrumbs');
    if (!post.path) return;
    const parts = post.path.split('/');
    parts.pop();
    const root = document.createElement('a');
    root.href = 'notes.html';
    root.textContent = 'Study Notes';
    container.appendChild(root);
    parts.forEach((part, index) => {
        container.append(' / ');
        const link = document.createElement('a');
        link.href = `notes.html?folder=${encodeURIComponent(parts.slice(0, index + 1).join('/'))}`;
        link.textContent = part;
        container.appendChild(link);
    });
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
