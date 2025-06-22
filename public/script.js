document.addEventListener('DOMContentLoaded', () => {

    // --- Language Toggler ---
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        let currentLanguage = localStorage.getItem('language') || 'en';

        // Translation data
        const translations = {
            en: {
                title: "Binwen Liu - AI Researcher & Developer",
                nav: {
                    about: "About",
                    blog: "Blog",
                    projects: "Projects",
                    publications: "Publications",
                    contact: "Contact"
                },
                hero: {
                    title: "AI Researcher & Developer",
                    description: "Currently a student at Xi'an Jiaotong University, pursuing a degree in Artificial Intelligence. Passionate about LLMs, Brain-Computer Interfaces, and AI for Science."
                },
                sections: {
                    about: "About",
                    projects: "Projects",
                    publications: "Publications",
                    posts: "Recent Posts",
                    research: "Research",
                    education: "Education",
                    skills: "Skills",
                    awards: "Awards",
                    contact: "Contact"
                },
                about: {
                    paragraph1: "I am a strategic AI researcher and developer with a passion for large language models and collaborative innovation. I have experience creating high-performance applications by leveraging state-of-the-art AI techniques and cross-functional collaboration.",
                    paragraph2: "My primary research interests include Brain-Computer Interfaces, the capabilities of Large Language Models, applying AI for Scientific discovery, and developing Multi-Modal Agents. I am dedicated to continuous learning and contributing to open-source communities."
                },
                projects: {
                    vaiage: {
                        title: "Vaiage: AI Travel Planner",
                        role: "Group Member, CS194 Project",
                        description: "Proposed product concept and integrated techniques like model fine-tuning, RAG, and CoT."
                    },
                    sleep: {
                        title: "Intelligent Sleep Medicine Consultation",
                        role: "Group Member, NLP Project",
                        description: "Constructed knowledge graphs with Neo4j and used BERT for full-stack development."
                    },
                    editor: {
                        title: "Online Editor with LLM",
                        role: "Team Member, China Software Cup",
                        description: "Handled PaddlePaddle & Wenxin LLM API integration and full-stack development."
                    }
                },
                publications: {
                    icll: {
                        title: "Probing In-Context Learning: Impact of Task Complexity and Model Architecture",
                        author: "Main Author, May 2025"
                    },
                    vaiage: {
                        title: "Vaiage: A Multi-Agent Solution to Personalized Travel Planning",
                        author: "Group Member, May 2025 (Project Paper)"
                    }
                },
                posts: {
                    first: {
                        title: "My First Blog Post",
                        preview: "This is a preview of my first blog post. Click to read more about my thoughts on the future of AI..."
                    },
                    more: "More posts"
                },
                research: {
                    lowlight: {
                        title: "Generalizable Low-Light Image Enhancement",
                        role: "Special Contributor | Jul 2024 - Jan 2025",
                        description: "Designed experimental benchmarks and led ablation study analysis."
                    },
                    video: {
                        title: "Video-Editing-Friendly Text-to-Image",
                        role: "Special Contributor | Feb 2024 - Aug 2024",
                        description: "Optimized LoRA fine-tuning strategies and implemented core code."
                    }
                },
                education: {
                    berkeley: {
                        school: "University of California, Berkeley",
                        degree: "Visiting Undergraduate Student | Jan 2025 - May 2025",
                        courses: "Courses: Deep Learning, Advanced LLM Agents, Internet Architecture."
                    },
                    xjtu: {
                        school: "Xi'an Jiaotong University",
                        degree: "B.Eng, Artificial Intelligence | Sep 2022 - Jun 2026",
                        courses: "Courses: Machine Learning, Computer Vision, NLP, Data Structures."
                    }
                },
                skills: {
                    hard: {
                        title: "Hard Skills"
                    },
                    languages: {
                        title: "Languages",
                        english: "English (Fluent)",
                        chinese: "Chinese (Native)"
                    }
                },
                awards: {
                    software: "13th \"China Software Cup\", National Finals Third Prize",
                    mcm: "Mathematical Contest in Modeling (MCM), H Prize",
                    fltrp: "FLTRP Cup National English Ability Competition, Silver Award"
                },
                contact: {
                    description: "Feel free to reach out. I'm always open to discussing new projects and opportunities."
                }
            },
            zh: {
                title: "刘滨闻 - AI研究员与开发者",
                nav: {
                    about: "关于",
                    blog: "博客",
                    projects: "项目",
                    publications: "论文",
                    contact: "联系"
                },
                hero: {
                    title: "AI研究员与开发者",
                    description: "目前是西安交通大学的学生，正在攻读人工智能学位。热衷于大语言模型、脑机接口和科学AI。"
                },
                sections: {
                    about: "关于",
                    projects: "项目",
                    publications: "论文",
                    posts: "最新文章",
                    research: "研究",
                    education: "教育",
                    skills: "技能",
                    awards: "奖项",
                    contact: "联系"
                },
                about: {
                    paragraph1: "我是一名战略AI研究员和开发者，热衷于大语言模型和协作创新。我拥有通过利用最先进的AI技术和跨职能协作创建高性能应用程序的经验。",
                    paragraph2: "我的主要研究兴趣包括脑机接口、大语言模型的能力、AI在科学发现中的应用以及多模态智能体的开发。我致力于持续学习并为开源社区做出贡献。"
                },
                projects: {
                    vaiage: {
                        title: "Vaiage: AI旅行规划师",
                        role: "小组成员，CS194项目",
                        description: "提出产品概念并集成模型微调、RAG和CoT等技术。"
                    },
                    sleep: {
                        title: "智能睡眠医学咨询",
                        role: "小组成员，NLP项目",
                        description: "使用Neo4j构建知识图谱，并使用BERT进行全栈开发。"
                    },
                    editor: {
                        title: "集成LLM的在线编辑器",
                        role: "团队成员，中国软件杯",
                        description: "处理PaddlePaddle和文心LLM API集成以及全栈开发。"
                    }
                },
                publications: {
                    icll: {
                        title: "探索上下文学习：任务复杂性和模型架构的影响",
                        author: "主要作者，2025年5月"
                    },
                    vaiage: {
                        title: "Vaiage：个性化旅行规划的多智能体解决方案",
                        author: "小组成员，2025年5月（项目论文）"
                    }
                },
                posts: {
                    first: {
                        title: "我的第一篇博客文章",
                        preview: "这是我的第一篇博客文章的预览。点击阅读更多关于我对AI未来的思考..."
                    },
                    more: "更多文章"
                },
                research: {
                    lowlight: {
                        title: "通用低光照图像增强",
                        role: "特别贡献者 | 2024年7月 - 2025年1月",
                        description: "设计实验基准并主导消融研究分析。"
                    },
                    video: {
                        title: "视频编辑友好的文本到图像",
                        role: "特别贡献者 | 2024年2月 - 2024年8月",
                        description: "优化LoRA微调策略并实现核心代码。"
                    }
                },
                education: {
                    berkeley: {
                        school: "加利福尼亚大学伯克利分校",
                        degree: "访问本科生 | 2025年1月 - 2025年5月",
                        courses: "课程：深度学习、高级LLM智能体、互联网架构。"
                    },
                    xjtu: {
                        school: "西安交通大学",
                        degree: "工学学士，人工智能 | 2022年9月 - 2026年6月",
                        courses: "课程：机器学习、计算机视觉、自然语言处理、数据结构。"
                    }
                },
                skills: {
                    hard: {
                        title: "硬技能"
                    },
                    languages: {
                        title: "语言",
                        english: "英语（流利）",
                        chinese: "中文（母语）"
                    }
                },
                awards: {
                    software: "第十三届\"中国软件杯\"，全国总决赛三等奖",
                    mcm: "美国大学生数学建模竞赛，H奖",
                    fltrp: "外研社杯全国英语能力竞赛，银奖"
                },
                contact: {
                    description: "欢迎随时联系。我总是乐于讨论新项目和机会。"
                }
            }
        };

        // Function to update text content
        function updateLanguage(lang) {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                const keys = key.split('.');
                let value = translations[lang];
                
                for (const k of keys) {
                    if (value && value[k]) {
                        value = value[k];
                    } else {
                        value = key; // Fallback to key if translation not found
                        break;
                    }
                }
                
                if (typeof value === 'string') {
                    element.textContent = value;
                }
            });
            
            // Update page title
            document.title = translations[lang].title;
            
            // Update meta tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            const twitterTitle = document.querySelector('meta[property="twitter:title"]');
            if (ogTitle) ogTitle.setAttribute('content', translations[lang].title);
            if (twitterTitle) twitterTitle.setAttribute('content', translations[lang].title);
        }

        // Initialize language
        updateLanguage(currentLanguage);

        // Language toggle event listener
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
            localStorage.setItem('language', currentLanguage);
            updateLanguage(currentLanguage);
        });
    }

    // --- Theme Toggler ---
    function simpleSetTheme() {
        let theme = localStorage.getItem('theme');
        if (!theme || theme === 'system') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.style.backgroundColor = theme === 'dark' ? '#111827' : '#F8F7F4';
        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', theme === 'dark' ? '#0B0B10' : '#FCFCFD');
        // 让 highlight-gradient 跟随主题
        const grad = document.getElementById('highlight-gradient');
        if (grad) {
            grad.style.backgroundImage = theme === 'dark'
                ? 'linear-gradient(to bottom, #111827 0%, #232946 60%, transparent 100%)'
                : 'linear-gradient(to bottom, #6A5ACD66, transparent)';
        }
    }

    // 页面加载时立即设置
    simpleSetTheme();

    // 监听系统主题变化（仅在 system 模式下生效）
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'system') {
            simpleSetTheme();
        }
    });

    // 切换按钮逻辑
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        function getNextTheme(current) {
            if (current === 'system') return 'light';
            if (current === 'light') return 'dark';
            return 'system';
        }
        themeToggle.addEventListener('click', () => {
            let current = localStorage.getItem('theme') || 'system';
            let next = getNextTheme(current);
            localStorage.setItem('theme', next);
            simpleSetTheme();
        });
    }

    // --- Sticky Header ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('not-top');
            } else {
                header.classList.remove('not-top');
            }
        });
    }

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

        // Fetch the search index - search.html is in root, so search-index.json is also in root
        fetch('/search-index.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                searchIndex = data;
                console.log('Search index loaded successfully:', data.length, 'items');
            })
            .catch(error => {
                console.error('Failed to fetch search index:', error);
                searchResults.innerHTML = '<p class="text-center text-red-500">Error loading search index. Please try again later.</p>';
            });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            searchResults.innerHTML = '';

            if (query.length < 2) {
                searchResults.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">Please enter at least 2 characters to search.</p>';
                return;
            }

            if (searchIndex.length === 0) {
                searchResults.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">Search index not loaded yet. Please wait...</p>';
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
