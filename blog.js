document.addEventListener('DOMContentLoaded', function () {
  loadBlogPosts();
});

function loadBlogPosts() {
  fetch('blog.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => renderPosts(data.posts))
    .catch(err => {
      console.error('Error loading blog posts:', err);
      document.getElementById('blog-container').innerHTML =
        '<p class="blog-empty">Could not load posts.</p>';
    });
}

function renderPosts(posts) {
  const container = document.getElementById('blog-container');
  if (!posts || posts.length === 0) {
    container.innerHTML = '<p class="blog-empty">No posts yet.</p>';
    return;
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = '';
  posts.forEach(post => container.appendChild(createPostElement(post)));
}

function createPostElement(post) {
  const article = document.createElement('article');
  article.className = 'blog-post';
  article.id = post.id;

  // Title
  const title = document.createElement('div');
  title.className = 'blog-post-title';
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

  // Summary
  if (post.summary) {
    const summary = document.createElement('p');
    summary.className = 'blog-post-summary';
    summary.textContent = post.summary;
    article.appendChild(summary);
  }

  // Full content (collapsible)
  if (post.content) {
    const content = document.createElement('div');
    content.className = 'blog-post-content';
    content.innerHTML = post.content;
    article.appendChild(content);

    const toggle = document.createElement('button');
    toggle.className = 'blog-toggle';
    toggle.textContent = 'Read more';
    toggle.addEventListener('click', () => {
      const expanded = content.classList.toggle('expanded');
      toggle.textContent = expanded ? 'Collapse' : 'Read more';
    });
    article.appendChild(toggle);
  }

  return article;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
