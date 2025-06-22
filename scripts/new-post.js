#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function slugify(text) {
  // 简单的中文转拼音映射（可以扩展）
  const pinyinMap = {
    '测试': 'test',
    '文章': 'article',
    '博客': 'blog',
    '技术': 'tech',
    '学习': 'learning',
    '项目': 'project',
    '研究': 'research',
    '开发': 'development',
    '人工智能': 'ai',
    '机器学习': 'ml',
    '深度学习': 'deep-learning',
    '自然语言处理': 'nlp',
    '计算机视觉': 'cv',
    '数据科学': 'data-science'
  };
  
  let processedText = text;
  
  // 替换已知的中文词汇
  for (const [chinese, english] of Object.entries(pinyinMap)) {
    processedText = processedText.replace(new RegExp(chinese, 'g'), english);
  }
  
  // 移除剩余的中文字符和其他特殊字符
  processedText = processedText
    .replace(/[\u4e00-\u9fff]/g, '') // 移除中文字符
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  // 如果处理后为空，使用时间戳
  if (!processedText) {
    processedText = `post-${Date.now()}`;
  }
  
  return processedText;
}

function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function createPostFile(slug, title) {
  const template = `---
title: "${title}"
description: "Add your description here..."
pubDate: "${getCurrentDate()}"
tags: []
---

# ${title}

Start writing your blog post here...

## Introduction

Begin with an introduction to your topic.

## Main Content

Add your main content here.

## Conclusion

Wrap up your thoughts and provide any next steps or calls to action.

---

*This post was created using the automated script.*
`;

  const filePath = path.join(__dirname, '..', 'src', 'content', 'blog', `${slug}.md`);
  fs.writeFileSync(filePath, template);
  return filePath;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: npm run new-post "Your Post Title"');
    console.log('Example: npm run new-post "My Amazing AI Discovery"');
    process.exit(1);
  }

  const title = args.join(' ');
  const slug = slugify(title);
  
  if (!slug) {
    console.error('❌ Error: Could not generate a valid slug from the title');
    process.exit(1);
  }
  
  try {
    const filePath = createPostFile(slug, title);
    console.log(`✅ Created new blog post: ${filePath}`);
    console.log(`📝 Edit the file to add your content`);
    console.log(`🌐 Your post will be available at: /blog/${slug}`);
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    process.exit(1);
  }
}

main(); 