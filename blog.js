document.addEventListener('DOMContentLoaded', () => {
  loadArticles();
  updateVaultCount();
});

async function loadArticles() {
  const container = document.getElementById('blog-posts');
  try {
    const blog = await fetchJson('blog.json', 6000);
    const posts = [...(blog.posts || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = '';
    if (posts.length === 0) {
      container.innerHTML = '<p class="blog-empty">No articles yet.</p>';
      return;
    }
    posts.forEach(post => container.appendChild(createPostElement(post)));
  } catch (error) {
    console.error('Could not load blog articles:', error);
    container.innerHTML = `
      <div class="blog-load-error" role="status">
        <p>Articles could not be loaded.</p>
        <button type="button" class="blog-toggle" id="retry-blog">Try again</button>
      </div>`;
    document.getElementById('retry-blog').addEventListener('click', loadArticles);
  }
}

async function updateVaultCount() {
  try {
    const vault = await fetchJson('blog-index.json', 6000);
    document.getElementById('vault-note-count').textContent =
      `${Number(vault.count) || 0} public notes · Synced from Obsidian`;
  } catch (error) {
    // The directory remains usable even when its optional count is unavailable.
    console.warn('Could not update the public note count:', error);
  }
}

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: 'no-cache'
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    return await response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

function createPostElement(post) {
  const article = document.createElement('article');
  article.className = 'blog-post';
  const tags = (post.tags || []).map(tag => `<span class="blog-tag">${escapeHtml(tag)}</span>`).join('');
  article.innerHTML = `
    <div class="blog-post-title">${escapeHtml(post.title)}</div>
    <div class="blog-post-meta">
      <span class="blog-post-date">${formatDate(post.date)}</span>
      ${tags ? `<div class="blog-tags">${tags}</div>` : ''}
    </div>
    ${post.summary ? `<p class="blog-post-summary">${escapeHtml(post.summary)}</p>` : ''}
    <a class="blog-toggle" href="post.html?id=${encodeURIComponent(post.id)}">Read more</a>`;
  return article;
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[character]);
}
