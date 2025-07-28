---
title: "log"
description: "关于MCP的第一次探索记录…"
pubDate: "2025-07-28"
tags: ["logs"]
---

# log

## Docker 日志

### 环境与背景

* 操作系统：Windows 11，使用 PowerShell 终端
* 主机设备：联想拯救者笔记本（16GB RAM，D盘可用空间约16GB）
* 已安装 Docker Desktop for Windows，启用了 "Expose daemon on tcp\://localhost:2375 without TLS"

### 核心操作记录

1. 初次尝试在本地部署 Docker，发现 Docker 镜像拉取失败，报错信息为：

```
ERROR: failed to solve: pytorch/pytorch:2.1.0-cuda11.8-cudnn8-runtime: failed to resolve source metadata for docker.io/pytorch/pytorch:2.1.0-cuda11.8-cudnn8-runtime: failed to authorize: failed to fetch oauth token.
```

2. 测试网络是否正常，运行了简单的镜像测试命令：

```
docker run --rm busybox wget https://www.google.com
```

测试通过，说明 Docker 本身网络正常。

3. 最终发现是由于 Docker Desktop 没有通过本地代理连接外网，开启 Clash 等代理工具的 TUN 模式后，Docker 拉取镜像正常。

4. 学习基础 Docker 操作，首次使用 Flask 镜像：

* 编写简单 Flask 服务并制作 Dockerfile:

```Dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

* 构建镜像并运行容器：

```
docker build -t flask-demo .
docker run -it --rm -p 5000:5000 flask-demo
```

* 尝试热更新修改后的代码失败，了解到容器内文件不会自动同步宿主机代码，必须使用 Volume 映射本地文件夹。

5. 继续学习 Docker 的常用命令：

* `docker build` 构建镜像
* `docker run` 运行容器（端口映射、Volume 映射）
* `docker images` 查看镜像
* `docker ps` 查看容器
* `docker stop` 停止容器
* `docker rm` 删除容器
* `docker rmi` 删除镜像
* `docker logs` 查看容器日志
* `docker exec` 进入容器内部交互环境

6. 尝试运行外部提供的 MCP/Notion 镜像:

```
docker run mcp/notion
```

首次运行无输出，后明确需传入环境变量才能正确启动镜像。

7. 在调试 MCP 镜像时，反复出现 JSON 格式与 PowerShell 不兼容的问题，尝试多种解决方案后发现直接使用简单的环境变量方式传入 Token 最有效稳定。

8. 进一步明确 Docker 镜像与容器区别:

* 镜像（Image）是静态模板，不能修改
* 容器（Container）是镜像的运行实例，可以进行读写操作## MCP（Notion）部分日志





---

*This post was created using the automated script.*
