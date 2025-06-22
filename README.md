# Binwen Liu - Personal Website

基于 Astro 构建的现代化个人网站，包含博客、搜索、RSS 订阅等功能。

## 🚀 功能特性

- **现代化设计**: 响应式设计，支持暗色模式
- **博客系统**: 基于 Markdown 的博客文章
- **搜索功能**: 实时搜索博客内容
- **RSS 订阅**: 自动生成 RSS 源
- **SEO 优化**: 自动生成 sitemap，支持 Open Graph
- **多语言支持**: 国际化支持（待扩展）
- **自动部署**: GitHub Actions 自动部署到 GitHub Pages

## 📦 技术栈

- **Astro**: 静态站点生成器
- **Tailwind CSS**: 样式框架
- **MDX**: Markdown 增强
- **TypeScript**: 类型安全

## 🛠️ 开发环境

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

## 📝 写作工作流

### 创建新文章

使用自动脚本创建新文章：

```bash
npm run new-post "文章标题"
```

这将自动：

1. 生成文章文件 `src/content/blog/文章标题.md`
2. 设置正确的 frontmatter
3. 创建基本的文章结构

### 文章格式

文章使用 Markdown 格式，frontmatter 包含：

```yaml
---
title: "文章标题"
description: "文章描述"
pubDate: "2025-01-01"
tags: ["标签1", "标签2"]
---
```

### 文章内容

支持标准 Markdown 语法：

- 标题 (`#`, `##`, `###`)
- 列表 (`-`, `1.`)
- 代码块 (```)
- 链接 (`[文本](URL)`)
- 图片 (`![alt](src)`)
- 引用 (`>`)

## 🚀 部署

### 自动部署

项目配置了 GitHub Actions 工作流，推送到 `main` 分支时会自动：

1. 构建项目
2. 部署到 GitHub Pages
3. 生成 sitemap 和 RSS 源

### 手动部署

```bash
# 构建项目
npm run build

# 推送到 GitHub
git add .
git commit -m "Update website"
git push origin main
```

## 📁 项目结构

```
├── src/
│   ├── content/
│   │   ├── blog/           # 博客文章
│   │   └── config.ts       # 内容集合配置
│   ├── layouts/
│   │   └── Layout.astro    # 主布局
│   ├── pages/
│   │   ├── index.astro     # 主页
│   │   ├── blog/
│   │   │   ├── index.astro # 博客列表
│   │   │   └── [...slug].astro # 文章详情
│   │   ├── search.astro    # 搜索页面
│   │   └── rss.xml.js      # RSS 源
│   └── styles/
│       └── global.css      # 全局样式
├── public/
│   ├── data/               # 静态资源
│   ├── script.js           # 客户端脚本
│   └── styles.css          # 样式文件
├── scripts/
│   └── new-post.js         # 文章生成脚本
└── .github/workflows/
    └── deploy.yml          # 部署工作流
```

## 🎨 自定义

### 样式定制

- 修改 `src/styles/global.css` 自定义样式
- 修改 `tailwind.config.mjs` 配置 Tailwind

### 内容定制

- 修改 `src/layouts/Layout.astro` 更改布局
- 修改 `src/pages/index.astro` 更改主页内容
- 在 `src/content/blog/` 添加文章

### 功能扩展

- 添加新的页面到 `src/pages/`
- 修改 `src/content/config.ts` 扩展内容类型
- 更新 `scripts/new-post.js` 自定义文章模板

## 🔧 脚本命令

| 命令                 | 描述           |
| -------------------- | -------------- |
| `npm run dev`      | 启动开发服务器 |
| `npm run build`    | 构建生产版本   |
| `npm run preview`  | 预览生产版本   |
| `npm run new-post` | 创建新文章     |

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 这是一个基于 Astro 的现代化个人网站项目，提供了完整的博客和部署工作流。所有功能都已经配置好，可以直接使用。

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                               |
| :-------------------------- | :--------------------------------------------------- |
| `npm install`             | Installs dependencies                                |
| `npm run dev`             | Starts local dev server at `localhost:4321`        |
| `npm run build`           | Build your production site to `./dist/`            |
| `npm run preview`         | Preview your build locally, before deploying         |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                         |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
