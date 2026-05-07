document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    
    if (!postId) {
        document.getElementById('single-post-container').innerHTML = '<p>Post not found.</p>';
        return;
    }

    fetch('blog.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            const post = data.posts.find(p => p.id === postId);
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

    // Title
    const title = document.createElement('h1');
    title.className = 'blog-post-title';
    title.style.fontSize = '2em';
    title.style.marginBottom = '10px';
    title.textContent = post.title;
    article.appendChild(title);

    // Meta: date + tags
    const meta = document.createElement('div');
    meta.className = 'blog-post-meta';

    const date = document.createElement('span');
    date.className = 'blog-post-date';
    date.textContent = formatDate(post.date);
    meta.appendChild(date);

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
                content.innerHTML = marked.parse(md);
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

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
