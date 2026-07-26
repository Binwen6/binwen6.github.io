document.addEventListener('DOMContentLoaded', loadBlog);

async function loadBlog() {
  const container = document.getElementById('blog-container');
  try {
    const [blogResponse, notesResponse] = await Promise.all([
      fetch('blog.json'),
      fetch('blog-index.json')
    ]);
    if (!blogResponse.ok || !notesResponse.ok) throw new Error('Could not load the blog index.');
    const blog = await blogResponse.json();
    const notes = await notesResponse.json();
    container.innerHTML = '';
    container.appendChild(createVaultEntry(notes));
    [...(blog.posts || [])]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .forEach(post => container.appendChild(createPostElement(post)));
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p class="blog-empty">Could not load posts.</p>';
  }
}

function createVaultEntry(vault) {
  const article = document.createElement('article');
  article.className = 'blog-post blog-directory';
  article.innerHTML = `
    <div class="blog-directory-label"><span class="fas fa-folder" aria-hidden="true"></span> NOTE DIRECTORY</div>
    <div class="blog-post-title">${escapeHtml(vault.vaultName || 'Study Notes')}</div>
    <div class="blog-post-meta"><span class="blog-post-date">${Number(vault.count) || 0} public notes · Synced from Obsidian</span></div>
    <p class="blog-post-summary">Research notes, paper reading, experiments, and working ideas organized with the original vault structure.</p>
    <a class="blog-toggle" href="notes.html">Browse directory →</a>`;
  return article;
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
