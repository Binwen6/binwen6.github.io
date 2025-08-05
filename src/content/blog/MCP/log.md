---
title: "log"
description: "关于 MCP 的第一次探索记录…"
pubDate: "2025-07-28"
tags: ["logs"]
---

# Docker 与 MCP 探索日志

## Part I：Docker 与 MCP 的初步探索

### 背景

尝试使用官方提供的 `mcp/notion` 容器镜像，在本地访问 Notion API，通过标准化 MCP 协议实现连接。

### Notion 设置步骤

1. 在 [Notion Developers](https://developers.notion.com) 创建 Integration。
2. 获取以 `ntn_` 为前缀的 token。
3. 打开目标页面 → Share → Add connections → 添加该 Integration 的权限。

### Docker 调用问题记录

#### 问题 1：调用无返回

多次尝试以下命令：

```
docker run --rm -i -e NOTION_TOKEN=ntn_XXX mcp/notion
```

光标闪烁，粘贴以下内容：

```
{"method":"GET","url":"/v1/users/me"}
```

无返回。问题原因：请求中必须添加 `"id": "XXX"` 字段。

#### 问题 2：JSON 转义不兼容

尝试使用 `OPENAPI_MCP_HEADERS`：

```
docker run -e OPENAPI_MCP_HEADERS='{"Authorization":"Bearer ntn_...","Notion-Version":"2022-06-28"}' mcp/notion
```

报错：`invalid reference format`。原因是 Windows PowerShell 对 JSON 转义不兼容。

#### 问题 3：PowerShell 变量传参失败

改用 PowerShell 变量传参：

```
$env:OPENAPI_MCP_HEADERS = '{...}'
docker run -e OPENAPI_MCP_HEADERS="$env:OPENAPI_MCP_HEADERS" mcp/notion
```

仍报错，无法识别 JSON。最终放弃该方法。

### 正确调用方式（推荐）

#### 方法 1：使用 `NOTION_TOKEN` 环境变量

最简单、最少报错的方式：

```
docker run --rm -i -e NOTION_TOKEN=ntn_XXX mcp/notion
```

输入完整请求：

```
{"method":"GET","url":"/v1/users/me","id":"u1"}
```

成功返回 Notion 用户信息，容器工作正常。

#### 方法 2：配置 `.cursor/mcp.json` 文件

编写以下配置文件：

```json
{
  "mcpServers": {
    "notion": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i", "-e", "NOTION_TOKEN", "mcp/notion"
      ],
      "env": {
        "NOTION_TOKEN": "ntn_XXX"
      }
    }
  }
}
```

此文件可被 Cursor 调用，也适用于 n8n credentials。

## Part II：Notion MCP 的局限性

### 初步设想

最初以为授权页面并开通 MCP（Model Context Protocol）后，ChatGPT 能像本地助手一样读写所有 Notion 数据库，甚至主动创建待办、填报告。

### 实际发现

但实际情况是：

- ✅ 普通的 Notion 文档页面（Page）内容可以被 ChatGPT 读取。
- ❌ 数据库视图（Table / Board）无法获取其子项，即使它们是页面。
- ❌ ChatGPT 目前无法写入 Notion，即使 MCP 理论上支持双向协议。

### 总结

MCP 本质上并非数据 API，而是一种“上下文理解协议”。它不会主动遍历结构化信息，而是辅助在“正在阅读的页面”中完成更智能的操作。

## 经验总结

1. Docker 是开发者世界的通用“封装器”，掌握它比装对多少包都重要。
2. MCP 是一次人机上下文交互的革新，但别指望它立刻变成全知秘书。
3. 不要默认一项功能已经“通用化”，多尝试、多对照，才能发现真实边界。
4. 从“操作命令”到“抽象认知”的转变，是技术成长的起点。
5. 记录探索过程，比仅仅记录结论更有价值。

## 尾声：技术，是走进去才知道的世界

今天的两个主题，从表面上看是容器和上下文协议，实际上是“技术理解力”的延伸——看似熟悉的工具，在深入之后依然能带来新角度的启发。

未来回顾这一天时，我不希望只记得“我配置了什么”，而更想记住“我当时是怎么想的，又是怎么改变想法的”。

如果你也在用 ChatGPT + Notion，或者想更好地用 Docker 组织工作流，欢迎一起交流🧠

—— Binwen Liu

---

*This post was created using the automated script.*
