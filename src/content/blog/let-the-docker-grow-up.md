---
title: "Let the docker grow up!"
description: "这是我的第一篇学习笔记"
pubDate: "2025-07-28"
tags: ["Notes"]
---

# Let the docker grow up!
太好了，现在我们进入 Docker 实战进阶阶段！我来先带你掌握：

---


## Network

<!-- - [与docker有关的网络配置](./docker/network.md) -->
[与 docker 有关的网络配置](/blog/docker/Network)

## Log
[关于docker的第一次探索记录…](/blog/docker/log)

[顺便探索了一下MCP](/blog/MCP/log)

## ✅ 第一部分：命令行中最常用的 Docker 命令（附示例）

| 目的         | 命令                               | 说明                       |
| ---------- | -------------------------------- | ------------------------ |
| 📦 构建镜像    | `docker build -t 镜像名 .`          | 从当前目录的 `Dockerfile` 构建镜像 |
| 🚀 运行容器    | `docker run -it 镜像名`             | 启动一个交互式容器                |
| 🔌 映射端口    | `docker run -p 宿主端口:容器端口 镜像名`    | 将容器端口映射到主机               |
| 🗂️ 挂载目录   | `docker run -v 本地目录:容器目录 镜像名`    | 让容器访问本地文件                |
| 🧼 停止并删除容器 | `docker rm -f 容器ID或名称`           | 立即强制删除容器                 |
| 📋 查看容器    | `docker ps -a`                   | 列出所有容器（包括停止的）            |
| 🔍 查看镜像    | `docker images`                  | 列出所有本地镜像                 |
| 🧹 删除镜像    | `docker rmi 镜像名或ID`              | 删除本地镜像                   |
| 🧾 查看日志    | `docker logs 容器ID`               | 容器运行时的控制台输出              |
| 📤 导出镜像    | `docker save -o 文件名.tar 镜像名`     | 导出镜像为离线包                 |
| 📥 导入镜像    | `docker load -i 文件名.tar`         | 导入 `.tar` 镜像文件           |
| 🔧 进入容器终端  | `docker exec -it 容器ID /bin/bash` | 进入正在运行的容器                |

---

## ✅ 第二部分：Dockerfile 模板（通用结构讲解）

一个标准 Dockerfile 的结构如下：

```dockerfile
# ① 选择基础镜像
FROM python:3.10-slim

# ② 设置工作目录（容器内部的文件位置）
WORKDIR /app

# ③ 拷贝文件（从宿主机拷贝到容器中）
COPY requirements.txt .

# ④ 安装依赖
RUN pip install -r requirements.txt

# ⑤ 再拷贝程序代码
COPY . .

# ⑥ 暴露端口（可选，用于文档提示）
EXPOSE 5000

# ⑦ 设置环境变量（可选）
ENV PYTHONUNBUFFERED=1

# ⑧ 容器启动后默认执行的命令
CMD ["python", "app.py"]
```

---

## 🔧 模板讲解：

| 指令        | 作用                                                      |
| --------- | ------------------------------------------------------- |
| `FROM`    | 指定你想以哪个镜像为基础，比如 `ubuntu`、`python:3.10` 等                |
| `WORKDIR` | 相当于 `cd`，后续命令都以这个目录为当前目录                                |
| `COPY`    | 把宿主机的文件复制到容器内部（可以是 `.`, `app.py`, `requirements.txt` 等） |
| `RUN`     | 在构建时执行的命令，比如安装依赖、构建代码等                                  |
| `CMD`     | 容器**启动时**执行的命令（只能有一个）                                   |
| `ENV`     | 设置环境变量，类似 `export`                                      |
| `EXPOSE`  | 说明容器哪个端口对外服务（仅文档提示作用）                                   |

---

## 📦 示例任务：Flask 项目 Dockerfile（基础+可扩展）

```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app.py
ENV FLASK_ENV=development

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
```

这个版本支持热重载、debug 模式，适合开发环境使用。

---

### 🚀 下一步建议

如果你掌握了这些，我们可以继续进入中级任务，比如：

* 制作带 Redis/MySQL 的多容器项目（Docker Compose）
* 制作支持参数化部署的镜像（`ARG` 和 `ENTRYPOINT`）
* 构建多阶段镜像以减小体积
* 运行带定时任务 / 多进程的容器



---

*This post was created using the automated script.*
