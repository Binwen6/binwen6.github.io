function renderCurrentDate() {
  const locale = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh-CN' : 'en-US';
  const currentDate = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric'
  }).format(new Date());
  document.querySelectorAll('[data-current-date]').forEach(element => {
    element.textContent = currentDate;
  });
}

document.addEventListener('DOMContentLoaded', renderCurrentDate);
document.addEventListener('site:languagechange', renderCurrentDate);
