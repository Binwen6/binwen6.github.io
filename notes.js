let allNotes = [];
let activeDirectory = '';

document.addEventListener('DOMContentLoaded', () => {
  activeDirectory = new URLSearchParams(window.location.search).get('folder') || '';
  document.getElementById('note-search').addEventListener('input', renderNotes);
  document.getElementById('folder-toggle').addEventListener('click', event => {
    const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
    event.currentTarget.setAttribute('aria-expanded', String(!expanded));
    document.getElementById('folder-tree').classList.toggle('open', !expanded);
  });
  loadNotes();
});

function loadNotes() {
  fetch('blog-index.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      allNotes = data.notes || [];
      document.getElementById('blog-description').textContent =
        `${data.vaultName} · A public collection synced from my local Obsidian vault.`;
      renderFolderTree();
      renderNotes();
    })
    .catch(err => {
      console.error('Error loading notes:', err);
      document.getElementById('blog-container').innerHTML =
        '<p class="blog-empty">Could not load notes.</p>';
    });
}

function renderFolderTree() {
  const counts = new Map([['', allNotes.length]]);
  allNotes.forEach(note => {
    if (!note.directory) return;
    const parts = note.directory.split('/');
    for (let index = 1; index <= parts.length; index += 1) {
      const folder = parts.slice(0, index).join('/');
      counts.set(folder, (counts.get(folder) || 0) + 1);
    }
  });
  const tree = document.getElementById('folder-tree');
  tree.innerHTML = '';
  tree.appendChild(createFolderButton('', 'All notes', allNotes.length, 0));
  [...counts.entries()]
    .filter(([folder]) => folder)
    .sort(([a], [b]) => a.localeCompare(b, 'zh-CN'))
    .forEach(([folder, count]) => {
      tree.appendChild(createFolderButton(folder, folder.split('/').pop(), count, folder.split('/').length - 1));
    });
}

function createFolderButton(folder, label, count, depth) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `folder-item${folder === activeDirectory ? ' active' : ''}`;
  button.style.setProperty('--folder-depth', depth);
  button.innerHTML = `<span class="fas ${folder ? 'fa-folder' : 'fa-layer-group'}" aria-hidden="true"></span><span>${escapeHtml(label)}</span><small>${count}</small>`;
  button.addEventListener('click', () => {
    activeDirectory = folder;
    document.querySelectorAll('.folder-item').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('folder-toggle').textContent = folder ? label : 'Browse folders';
    document.getElementById('folder-tree').classList.remove('open');
    document.getElementById('folder-toggle').setAttribute('aria-expanded', 'false');
    renderNotes();
  });
  return button;
}

function renderNotes() {
  const container = document.getElementById('blog-container');
  const query = document.getElementById('note-search').value.trim().toLocaleLowerCase();
  const notes = allNotes.filter(note => {
    const inFolder = !activeDirectory || note.directory === activeDirectory || note.directory.startsWith(`${activeDirectory}/`);
    const searchable = `${note.title} ${note.path} ${note.summary} ${(note.tags || []).join(' ')}`.toLocaleLowerCase();
    return inFolder && (!query || searchable.includes(query));
  });
  document.getElementById('note-count').textContent = `${notes.length} note${notes.length === 1 ? '' : 's'}`;
  if (notes.length === 0) {
    container.innerHTML = '<p class="blog-empty">No matching notes.</p>';
    return;
  }

  container.innerHTML = '';
  notes
    .sort((a, b) => a.path.localeCompare(b.path, 'zh-CN'))
    .forEach(note => container.appendChild(createNoteElement(note)));
}

function createNoteElement(note) {
  const article = document.createElement('article');
  article.className = 'blog-post vault-note-card';
  const link = document.createElement('a');
  link.className = 'note-card-link';
  link.href = `post.html?note=${encodeURIComponent(note.id)}`;
  const pathLabel = note.directory || 'Vault root';
  link.innerHTML = `<div class="note-path"><span class="fas fa-folder-open" aria-hidden="true"></span>${escapeHtml(pathLabel)}</div><h2>${escapeHtml(note.title)}</h2>`;
  if (note.summary) {
    const summary = document.createElement('p');
    summary.className = 'blog-post-summary';
    summary.textContent = note.summary;
    link.appendChild(summary);
  }
  const open = document.createElement('span');
  open.className = 'note-open';
  open.textContent = 'Open note →';
  link.appendChild(open);
  article.appendChild(link);
  return article;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[character]);
}
