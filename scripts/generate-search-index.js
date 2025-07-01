#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 移除Markdown格式的函数
function stripMarkdown(content) {
  return content
    .replace(/^---[\s\S]*?---/, '') // 移除frontmatter
    .replace(/#{1,6}\s+/g, '') // 移除标题标记
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体
    .replace(/`(.*?)`/g, '$1') // 移除行内代码
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接，保留文本
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1') // 移除图片，保留alt文本
    .replace(/\n+/g, ' ') // 将多个换行替换为单个空格
    .replace(/\s+/g, ' ') // 将多个空格替换为单个空格
    .trim();
}

// 读取博客文章并生成搜索索引
function generateSearchIndex() {
  const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');
  const outputPath = path.join(__dirname, '..', 'public', 'search-index.json');
  
  const searchIndex = [];
  
  try {
    // 读取博客目录中的所有.md文件
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
    
    for (const file of files) {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // 解析frontmatter
      const { data, content: markdownContent } = matter(content);
      
      // 移除Markdown格式
      const plainContent = stripMarkdown(markdownContent);
      
      // 生成URL（基于文件名，不包含.md扩展名）
      const slug = file.replace('.md', '');
      const url = `/blog/${slug}`;
      
      searchIndex.push({
        title: data.title || 'Untitled',
        url: url,
        content: plainContent,
        tags: data.tags || [],
        pubDate: data.pubDate || '',
        description: data.description || ''
      });
    }
    
    // 添加静态页面的内容
    const staticPages = [
      {
        title: "About Me",
        url: "/#about",
        content: "I am a strategic AI researcher and developer with a passion for large language models and collaborative innovation. I have experience creating high-performance applications by leveraging state-of-the-art AI techniques and cross-functional collaboration. My primary research interests include Brain-Computer Interfaces, the capabilities of Large Language Models, applying AI for Scientific discovery, and developing Multi-Modal Agents. I am dedicated to continuous learning and contributing to open-source communities."
      },
      {
        title: "Projects",
        url: "/#projects",
        content: "Vaiage: AI Travel Planner. Intelligent Sleep Medicine Consultation. Online Editor with LLM."
      },
      {
        title: "Publications",
        url: "/#publications",
        content: "Probing In-Context Learning: Impact of Task Complexity and Model Architecture. Vaiage: A Multi-Agent Solution to Personalized Travel Planning."
      },
      {
        title: "Research",
        url: "/#research",
        content: "Generalizable Low-Light Image Enhancement. Video-Editing-Friendly Text-to-Image."
      },
      {
        title: "Education",
        url: "/#education",
        content: "University of California, Berkeley. Xi'an Jiaotong University."
      },
      {
        title: "Skills",
        url: "/#skills",
        content: "Python, PyTorch, TensorFlow, JavaScript, React, Node.js, Git, Docker, AWS, Google Cloud."
      },
      {
        title: "Awards",
        url: "/#awards",
        content: "13th China Software Cup National Finals Third Prize. Mathematical Contest in Modeling H Prize. FLTRP Cup National English Ability Competition Silver Award."
      },
      {
        title: "Contact",
        url: "/#contact",
        content: "Feel free to reach out. I'm always open to discussing new projects and opportunities."
      }
    ];
    
    searchIndex.push(...staticPages);
    
    // 写入搜索索引文件
    fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));
    
    console.log(`✅ Generated search index with ${searchIndex.length} items`);
    console.log(`📁 Blog posts found: ${files.length}`);
    console.log(`📄 Search index saved to: ${outputPath}`);
    
    // 显示博客文章列表
    console.log('\n📝 Blog posts in search index:');
    searchIndex.filter(item => item.url.startsWith('/blog/')).forEach(item => {
      console.log(`  - ${item.title} (${item.url})`);
    });
    
  } catch (error) {
    console.error('❌ Error generating search index:', error.message);
    process.exit(1);
  }
}

// 运行脚本
generateSearchIndex(); 