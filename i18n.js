// Theme (day/night) and language (EN/中文) switching for the homepage.
// English text lives in index.html; elements marked with data-i18n get their
// Chinese version from the dictionary below. The original English is captured
// from the DOM on load, so edits to index.html keep working in English.

const I18N_ZH = {
  'nav.about': '关于',
  'nav.research': '研究',
  'nav.projects': '项目',
  'nav.news': '动态',
  'nav.publications': '论文',
  'nav.awards': '荣誉',
  'nav.services': '服务',
  'nav.misc': '其他',
  'nav.blog': '博客',

  'quote': '理解智能——于心智，亦于机器。',
  'header.name': '刘滨闻',
  'header.subtitle': '人工智能方向博士研究生 • 西安交通大学',
  'header.email': '<i class="fas fa-envelope"></i>liubinwen [at] stu [dot] xjtu [dot] edu [dot] cn',

  'about.intro': '你好！我是西安交通大学人工智能专业一年级直博生，导师为 ' +
    '<a href="https://scholar.google.com/citations?user=mq6tPX4AAAAJ&hl=en">陈霸东</a> 教授与 ' +
    '<a href="https://scholar.google.com/citations?user=6mMSxZYAAAAJ&hl=en">郑凯中</a> 老师。',

  'research.title': '研究方向',
  'research.p1': '我的研究关注 <strong>AI 系统的认知机制</strong>，尤其聚焦于<strong>自主智能体</strong>。' +
    '借助认知科学的理论框架，我希望诊断当前 AI 智能体在推理、监控与行动方面存在的<strong>结构性缺陷</strong>——' +
    '这些局限往往被常规的任务级基准测试所掩盖。',
  'research.p2': '我的工作从认知诊断走向建设性方案，旨在推动 AI <strong>架构</strong>与<strong>对齐</strong>的改进。' +
    '我尤其关注执行功能、工作记忆与元认知监控等具体认知能力，在<strong>语言模型</strong>与' +
    '<strong>行动型智能体</strong>中如何表现、又如何以不同方式失效。',

  'projects.title': '代表性项目',
  'news.title': '最新动态',
  'news.1': '[2026/9]：赴上海复旦大学参加<em><strong>脑科学与类脑研究</strong>国家科技重大专项（2025–2030）</em>季度研讨会。',
  'news.2': '[2026/4]：赴湖南长沙参加<em><strong>脑科学与类脑研究</strong>国家科技重大专项（2025–2030）</em>季度研讨会。',
  'news.3': '[2026/1]：作为参与成员出席在复旦大学举行的项目启动会。该项目<em>情感认知与道德推理驱动的类脑多智能体社会交互系统研究</em>' +
    '获批<em><strong>脑科学与类脑研究</strong>国家科技重大专项（2025–2030）</em>立项。',
  'news.4': '[2025/10]：通过直博项目进入人机混合增强智能全国重点实验室 & 人工智能与机器人研究所（IAIR）。',

  'pubs.selected': '代表性论文',
  'pubs.all': '全部论文',
  'pubs.showAll': '显示全部',
  'pubs.showSelected': '仅显示代表作',

  'awards.title': '荣誉与奖项',
  'awards.1': '🏆 冠军（元认知赛道）—— Kaggle / Google DeepMind 黑客松 "Measuring Progress Toward AGI: Cognitive Abilities"' +
    '（为学习、元认知、社会认知等认知能力设计评测基准） <a href="https://doi.org/10.34740/kaggle/w/77513">[证书]</a>',
  'awards.2': '第十一届全国大学生生物医学工程创新设计竞赛 三等奖（面向特种车辆驾驶员久坐疲劳干预的电热腰带） ' +
    '<a href="images/bme-competition-2026-certificate.png">[证书]</a>',
  'awards.3': '西安交通大学钱学森学院 2026 届荣誉毕业生优秀代表',
  'awards.4': 'Kaggle Deep Past Challenge —— 阿卡德语至英语翻译（4000 年前古亚述楔形文字的机器翻译）',
  'awards.5': '西安交通大学 2024–2025 学年社会活动先进个人',
  'awards.6': '第十三届"中国软件杯"大学生软件设计大赛 三等奖',
  'awards.7': '美国大学生数学建模竞赛（MCM）H 奖',
  'awards.8': '"外研社·国才杯"全国大学生外语能力大赛（英语写作）银奖',

  'services.title': '学术服务',
  'services.reviewer': '审稿人',
  'services.volunteer': '志愿者',
  'services.volunteer.1': '第二届中国具身智能与系统大会（CEAIS 2025）"情感具身智能"分论坛志愿者，中国西安，2025 年 11 月',

  'misc.title': '其他',
  'misc.1': '曾受 Douglas Hofstadter 与 Karl Friston 启发',

  'footer.updated': '最后更新：',
  'footer.rights': '。保留所有权利。',

  'toggle.theme.toDark': '切换到夜间模式',
  'toggle.theme.toLight': '切换到日间模式',
  'toggle.lang': '切换到英文'
};

const I18N_EN_EXTRA = {
  'pubs.selected': 'Selected Publications',
  'pubs.all': 'All Publications',
  'pubs.showAll': 'Show All',
  'pubs.showSelected': 'Show Selected',
  'toggle.theme.toDark': 'Switch to night mode',
  'toggle.theme.toLight': 'Switch to day mode',
  'toggle.lang': 'Switch to Chinese'
};

const i18nEnglish = {};

function readPref(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function writePref(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
}

function getLang() {
  return document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
}

// Translate a key for code that renders text dynamically (see scripts.js)
function t(key) {
  if (getLang() === 'zh' && key in I18N_ZH) return I18N_ZH[key];
  return i18nEnglish[key] || I18N_EN_EXTRA[key] || key;
}

function applyLanguage(lang) {
  const root = document.documentElement;
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!(key in i18nEnglish)) i18nEnglish[key] = el.innerHTML;
    el.innerHTML = lang === 'zh' && key in I18N_ZH ? I18N_ZH[key] : i18nEnglish[key];
  });

  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.textContent = lang === 'zh' ? 'EN' : '中';
    langButton.setAttribute('aria-label', t('toggle.lang'));
    langButton.title = t('toggle.lang');
  }

  updateThemeButton();
  document.dispatchEvent(new CustomEvent('site:languagechange', { detail: { lang } }));
}

function updateThemeButton() {
  const themeButton = document.getElementById('theme-toggle');
  if (!themeButton) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  themeButton.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}" aria-hidden="true"></i>`;
  const label = t(isDark ? 'toggle.theme.toLight' : 'toggle.theme.toDark');
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(readPref('site-lang') === 'zh' ? 'zh' : 'en');

  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      writePref('site-theme', next);
      updateThemeButton();
    });
  }

  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.addEventListener('click', () => {
      const next = getLang() === 'zh' ? 'en' : 'zh';
      writePref('site-lang', next);
      applyLanguage(next);
    });
  }
});
