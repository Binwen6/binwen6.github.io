document.addEventListener('DOMContentLoaded', () => {

    // --- Language Toggler ---
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        let currentLanguage = localStorage.getItem('language') || 'en';

        // Translation data
        const translations = {
            en: {
                title: "Binwen Liu's Homepage",
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
                    telecom: {
                        title: "Smart PPT Generator with Deep Semantic Fusion",
                        role: "Intern, China Telecom Shaanxi | Jun 2025 – Jul 2025",
                        point1: "Implemented key speech-information extraction module: local deployment of Whisper-v3‑large‑turbo and SenseVoice‑small",
                        point2: "Introduced long‑audio slicing and parallel inference to boost efficiency by 30–50%",
                        point3: "Integrated text‑correction API to enhance content quality, with accuracy over 97%, supporting PPT extraction"
                      },
                      vaiage: {
                        title: "Vaiage: A Multi‑Agent Solution to Personalized Travel Planning",
                        role: "CS194: Advanced LLM Agents, Core Member | Feb 2025 – May 2025",
                        point1: "Proposed product concept and reviewed over 20 related publications to analyze challenges in intent recognition, constraint planning, and context maintenance",
                        point2: "Developed itinerary engine and intelligent Q&A using LangChain RAG, CoT reasoning, and multi‑turn memory",
                        point3: "Integrated OpenAI Function Calling for weather, routing, and schedule tools",
                        point4: "Demo received Grade A and invitations from AGI Inc. and Nanjing University to join IJCAI‑2025 Travel Planning Challenge"
                      },
                      sleep: {
                        title: "Intelligent Knowledge‑Graph‑Based Sleep‑Medicine Consultation System",
                        role: "NLP Course Project, Member | Nov 2024 – Jan 2025",
                        point1: "Built Neo4j medical knowledge graph covering causes, symptoms, and treatments enabling multi‑hop QA and semantic inference",
                        point2: "Used BERT for intent classification and slot filling, combined subgraph retrieval and template mapping for response generation",
                        point3: "Deployed full‑stack Flask UI supporting multi‑turn interaction and symptom follow‑up"
                      },
                      speaker: {
                        title: "Content‑Independent Multifeature Speaker Recognition System",
                        role: "Digital Signal Processing Course, Core Member | Nov 2024 – Dec 2024",
                        point1: "Designed speaker‑recognition system using time‑domain features (zero‑crossing rate, energy entropy), frequency‑domain (spectral centroid, roll‑off, entropy), and dynamic MFCC features to enhance discriminability",
                        point2: "Implemented framing, windowing, FFT and Mel filters to extract over 50 multiscale features",
                        point3: "Combined SVM, KNN, random forest with voting strategy to reach 95% accuracy; created UI for visualization"
                      },
                      underwater: {
                        title: "Underwater Image Enhancement Framework Combining Statistical Analysis, Physical Modeling, and GAN",
                        role: "2024 Asia‑Pacific University MCM, Team Leader | Nov 2024",
                        point1: "Built statistical metrics based on color, sharpness, contrast to classify underwater degradation scenes",
                        point2: "Integrated Jaffe‑McGlamery physical model for light attenuation and scattering",
                        point3: "Developed three scenario-specific enhancement algorithms evaluated via PSNR/UCIQE/UIQM; combined deep learning and physical modeling into a cross‑scenario GAN framework, won Third Prize"
                      },
                      editor: {
                        title: "Online Smart Editor with Hybrid Model Collaboration",
                        role: "13th China Software Cup, Core Member | May 2024 – Aug 2024",
                        point1: "Led front‑end/back‑end development with Vue + Flask to support concurrent responsive editing",
                        point2: "Integrated Wenxin AI and Paddle APIs for text rewriting, summarization, style transfer, OCR, polishing",
                        point3: "Designed 'small‑model local + large‑model cloud' collaboration mechanism",
                        point4: "Won National Third Prize and open‑sourced complete code"
                      },
                      mcm: {
                        title: "ARIMA‑LSTM Based Tennis Match Dynamic Analysis & Comeback Prediction",
                        role: "2024 US University MCM, Team Leader | Feb 2024",
                        point1: "Used Spearman correlation and Gaussian decay weighting to quantify match dynamics",
                        point2: "Built ARIMA + LSTM time‑series model with CUSUM detection and label smoothing for robust prediction",
                        point3: "Applied run‑test and cross‑correlation to assess temporal significance and provided tactical recommendation; submitted full English paper and won H‑Prize"
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
                    surgery: {
                        title: "AI-Guided Surgery: Ureter Segmentation from Laparoscopic Video Frames",
                        role: "AI Medical Image Segmentation Research | Jun 2025 - Aug 2025",
                        point1: "Built a dataset of 11,758 surgical video frames from real-world laparoscopic colorectal surgeries",
                        point2: "Reproduced and compared UNet3+, TransUNet, and nnU-Net on ureter recognition",
                        point3: "Evaluated segmentation quality using Dice, IoU, HD95, and analyzed failures via GradCAM and visualization",
                        point4: "Drafted a medical AI segmentation paper for submission to a peer-reviewed journal"
                    },
                    music: {
                        title: "Brain-Music Interface: Reconstructing Music from EEG Signals",
                        role: "Brain-Computer Interface & Music Reconstruction Research | May 2025 - Sep 2025",
                        point1: "Collected 32-channel EEG responses under 22050Hz music stimuli using clinical-grade setup",
                        point2: "Aligned EEG-audio pairs with validation pipeline to build a high-quality dataset",
                        point3: "Reproduced 9 EEG2Music models (Autoencoder, GAN, Diffusion, Attention-based)",
                        point4: "Evaluated perceptual quality using PEAQ, FAD, and LSD; explored imagined music decoding"
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
                        courses: "Courses: Machine Learning, Computer Vision & Pattern Recognition, NLP, Digital Signal Processing."
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
                    apmcm: "2024 Asia-Pacific Mathematical Contest in Modeling – Third Prize (Team Leader)",
                    fltrp2024: {
                      comp: "2024 FLTRP Cup – School-level English Comprehensive Silver Award",
                      trans: "2024 FLTRP Cup – School-level English Translation Silver Award"
                    },
                    softwarecup: "13th China Software Cup – National Finals Third Prize",
                    cumcm: "2024 China Undergraduate Mathematical Contest in Modeling – School Third Prize (Team Leader)",
                    mcm: "2024 MCM/ICM – H Prize (Team Leader)",
                    fltrp2023: {
                      write: "2023 FLTRP Cup – Provincial Writing Silver Award",
                      writing_special: "2023 FLTRP Cup – School Writing Special Prize",
                      reading: "2023 FLTRP Cup – School Reading First Prize"
                    }
                  },
                  contact: {
                    description: "Feel free to reach out anytime. I'm always open to discussing new projects and opportunities."
                  }
            },
            zh: {
                title: "刘滨闻的主页",
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
                    paragraph1: "我是一名有策略的AI研究员和开发者，热衷于大语言模型和协作创新。我拥有通过利用最先进的AI技术和跨职能协作创建高性能应用程序的经验。",
                    paragraph2: "我的主要研究兴趣包括脑机接口、大语言模型的能力、AI在科学发现中的应用以及多模态智能体的开发。我致力于持续学习并为开源社区做出贡献。"
                },
                projects: {
                    telecom: {
                        title: "言影智绘：基于深度语义理解的智慧内容融合与多模态生成平台",
                        role: "中国电信陕西公司实习项目 | 2025年6月 – 2025年7月",
                        point1: "负责语音关键信息提取模块实施，本地部署 Whisper‑v3‑large‑turbo 与 SenseVoice‑small 模型",
                        point2: "引入长音频切片与并行处理机制，效率提升 30–50 %",
                        point3: "集成文本纠错 API 实现内容增强，准确率达 97 % 以上，适配下游 PPT 内容抽取"
                      },
                      vaiage: {
                        title: "Vaiage: A Multi‑Agent Solution to Personalized Travel Planning",
                        role: "《CS194: Advanced LLM Agents》课程项目，核心成员 | 2025年2月 – 2025年5月",
                        point1: "提出创新性产品构想，深度调研 20 余篇文献，分析用户意图识别、约束规划与上下文保持的关键难点",
                        point2: "负责开发行程推荐引擎与智能问答模块，结合 LangChain RAG、CoT 推理与多轮记忆机制实现动态规划",
                        point3: "引入 OpenAI Function Calling 支持天气查询、路线生成与日程调整",
                        point4: "项目 Poster 获 Grade A，论文载于 arXiv，并受 AGI Inc. 与南京大学 LAMDA 课题组邀请参加 IJCAI‑2025 Travel Planning Challenge"
                      },
                      sleep: {
                        title: "基于知识图谱的智能睡眠医学问诊系统",
                        role: "《自然语言处理》课程项目，成员 | 2024年11月 – 2025年1月",
                        point1: "利用 Neo4j 构建覆盖病因、症状与治疗的医学知识图谱，实现多跳问答与语义关联推理",
                        point2: "使用 BERT 对用户意图分类及槽位抽取，结合子图检索与模板映射生成医学回复",
                        point3: "集成 Flask 前后端界面，完成支持多轮交互与症状追问的医疗对话系统原型，项目获课程奖学金"
                      },
                      speaker: {
                        title: "独立于内容的多特征说话人识别系统",
                        role: "《数字信号处理》课程项目，核心成员 | 2024年11月 – 2024年12月",
                        point1: "构建内容无关的说话人识别系统，融合零交叉率、能量熵、谱质心、谱滚降点、谱熵及 MFCC 动态特征，提升识别区分度",
                        point2: "实现分帧加窗、FFT 与 Mel 滤波器组处理，提取 50 余维多尺度音频特征并归一化",
                        point3: "集成 SVM、KNN、随机森林等分类器，采用多数投票策略优化识别准确率至 95 %，并实现可视化 UI 测试界面"
                      },
                      underwater: {
                        title: "融合多维统计分析、物理建模与 GAN 的多场景水下图像增强系统",
                        role: "2024 年亚太地区大学生数学建模竞赛，队长 | 2024年11月",
                        point1: "基于图像颜色、清晰度、对比度构建统计指标体系，完成多标签软分类并分析典型水下退化场景",
                        point2: "引入 Jaffe‑McGlamery 物理模型建模光照衰减与散射，设计三类增强算法并用 PSNR／UCIQE／UIQM 指标评估",
                        point3: "结合深度学习与物理建模设计跨场景 GAN 框架，实现多场景水下图像增强，获三等奖"
                      },
                      editor: {
                        title: "基于大小模型协同的在线智能编辑器",
                        role: "第十三届'中国软件杯'大赛项目，核心成员 | 2024年5月 – 2024年8月",
                        point1: "主导前后端开发，基于 Vue 与 Flask 构建网页端在线编辑器",
                        point2: "调用文心一言与飞桨 API 实现文本扩写、摘要提取、风格转换、OCR 识别与润色功能",
                        point3: "搭建'大小模型协同'机制，结合本地轻量模型与云端大模型实现快速响应与高质量生成",
                        point4: "项目获全国总决赛三等奖，代码已开源"
                      },
                      mcm: {
                        title: "ARIMA‑LSTM 联合建模的网球比赛动态分析与局势逆转预测",
                        role: "2024 年美国大学生数学建模竞赛（MCM），队长 | 2024年2月",
                        point1: "采用 Spearman 分析与高斯衰减赋权构建比赛动态量化指标，结合模糊综合评价法实现连续评分系统",
                        point2: "构建 ARIMA＋LSTM 联合模型进行时间序列建模与局势逆转预测，并辅以 CUSUM 检测与标签平滑回归提高鲁棒性",
                        point3: "应用游程检验和互相关分析验证时间显著性，提出战术建议；成果撰写英文论文并获 H 奖"
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
                    surgery: {
                      title: "用于术中引导的人工智能：在腹腔镜直肠切除术中识别手术解剖结构——输尿管",
                      role: "AI医学图像分割研究 | 2025.06 – 2025.08",
                      point1: "基于真实术中腹腔镜视频构建11758张手术帧图像数据集",
                      point2: "对比并复现UNet3+、TransUNet、nnU-Net等模型，开展空洞结构识别",
                      point3: "评估Dice、IoU、HD95等指标，结合GradCAM与实例可视化剖析识别失误",
                      point4: "研究成果撰写为AI医学图像分割方向论文，拟投稿于专业SCI期刊"
                    },
                    music: {
                      title: "基于EEG信号的音乐重建与脑机接口研究",
                      role: "脑机接口与音乐重建研究 | 2025.05 – 2025.09",
                      point1: "使用32通道脑电设备采集22050Hz音乐刺激下的EEG响应",
                      point2: "实现EEG与音频数据对齐及配对验证，构建高质量音乐脑机数据集",
                      point3: "复现9类EEG2Music模型，包括Autoencoder、Diffusion、GAN与注意力机制",
                      point4: "综合PEAQ、FAD、LSD等指标评估重建音质，探索音乐想象重建可能性"
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
                        courses: "课程：机器学习、计算机视觉与模式识别、自然语言处理、数字信号处理。"
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
                    apmcm: "2024 亚太地区大学生数学建模竞赛 – 三等奖（队长）",
                    fltrp2024: {
                      comp: "2024 外研社国才杯校赛 – 英语综合能力赛项银奖",
                      trans: "2024 外研社国才杯校赛 – 英语笔译赛项银奖"
                    },
                    softwarecup: "第十三届“中国软件杯”全国总决赛 – 三等奖",
                    cumcm: "2024 全国大学生数学建模竞赛 – 校赛三等奖（队长）",
                    mcm: "2024 美国大学生数学建模竞赛（MCM）– H奖（队长）",
                    fltrp2023: {
                      write: "2023 外研社国才杯省赛 – 英语写作赛项银奖",
                      writing_special: "2023 外研社国才杯校赛 – 写作赛项特等奖",
                      reading: "2023 外研社国才杯校赛 – 阅读赛项一等奖"
                    }
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
        document.body.style.backgroundColor = theme === 'dark' ? '#0F172A' : '#F8F7F4';
        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', theme === 'dark' ? '#0F172A' : '#F8F7F4');
        // 让 highlight-gradient 跟随主题
        const grad = document.getElementById('highlight-gradient');
        if (grad) {
            grad.style.backgroundImage = theme === 'dark'
                ? 'linear-gradient(to bottom, #0F172A 0%, #1E293B 60%, transparent 100%)'
                : 'linear-gradient(to bottom, #6A5ACD66, transparent)';
        }
        
        // 更新主题切换按钮图标
        updateThemeToggleIcon(theme);
    }

    function updateThemeToggleIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme');
        let newTheme;
        
        if (currentTheme === 'dark') {
            newTheme = 'light';
        } else if (currentTheme === 'light') {
            newTheme = 'dark';
        } else {
            // 如果是 system 模式，根据当前系统主题切换
            newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
        }
        
        localStorage.setItem('theme', newTheme);
        simpleSetTheme();
    }

    // 页面加载时立即设置
    simpleSetTheme();

    // 监听系统主题变化（仅在 system 模式下生效）
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'system') {
            simpleSetTheme();
        }
    });

    // 添加主题切换按钮事件监听
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
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
            document.title = "Come back soon!";
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
