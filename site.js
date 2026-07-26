document.addEventListener('DOMContentLoaded', () => {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date());
  document.querySelectorAll('[data-current-date]').forEach(element => {
    element.textContent = currentDate;
  });
});
