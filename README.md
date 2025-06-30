# Find-Jav-Bot

> 🚀 优化版本的 Telegram 番号查询机器人

## ✨ 特性

- 🔍 **智能番号查询** - 支持多种番号格式，自动格式化
- 📊 **详细统计** - 用户统计、群组统计、查询状态统计
- 🔐 **隐私保护** - 群聊中限制显示结果数量
- 📝 **完整日志** - 使用 Winston 进行结构化日志记录
- 💾 **数据持久化** - 状态和群组信息自动保存
- 🛡️ **错误处理** - 完善的错误处理和重试机制
- ⚡ **高性能** - 异步处理，支持并发请求
- 🔧 **配置灵活** - 支持环境变量配置

## 📋 系统要求

- Node.js 16.0.0 或更高版本
- npm 8.0.0 或更高版本
- PM2 (用于生产环境进程管理)

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/Frozenlianai/Find-Jav-bot-TG-
cd Find-Jav-bot
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制环境变量示例文件：

```bash
cp env.example .env
```

编辑 `.env` 文件，设置你的 Telegram Bot Token：

```env
TELEGRAM_TOKEN=你的Telegram机器人Token
ROBOT_NAME=Find-Jav-Bot
NODE_ENV=development
```

### 4. 启动机器人

#### 开发环境
```bash
npm run dev
```

#### 生产环境
```bash
# 使用 PM2 启动
npm run pm2:start

# 查看日志
npm run pm2:logs

# 停止机器人
npm run pm2:stop
```

## 📖 使用说明

### 机器人命令

| 命令 | 描述 | 示例 |
|------|------|------|
| `/start` | 发送欢迎信息 | `/start` |
| `/help` | 查看命令帮助 | `/help` |
| `/state [n]` | 查看最近n天工作状态 | `/state 10` |
| `/av [番号]` | 查询番号信息 | `/av abp-123` |
| `/usercount` | 统计用户信息 | `/usercount` |
| `/groupcount` | 统计群组信息 | `/groupcount` |
| `/next` | 查看下一页群组 | `/next` |
| `/prev` | 查看上一页群组 | `/prev` |

### 番号格式支持

机器人支持多种番号格式：
- `ABP-123`
- `abp123`
- `ABP_123`
- `abp 123`

## ⚙️ 配置说明

### 环境变量

| 变量名 | 描述 | 默认值 |
|--------|------|--------|
| `TELEGRAM_TOKEN` | Telegram Bot Token | 必需 |
| `ROBOT_NAME` | 机器人名称 | Find-Jav-Bot |
| `NODE_ENV` | 运行环境 | development |
| `LOG_LEVEL` | 日志级别 | info |
| `REQUEST_TIMEOUT` | 请求超时时间(ms) | 10000 |
| `REQUEST_RETRIES` | 请求重试次数 | 3 |
| `MAX_RESULTS_PRIVATE` | 私聊最大结果数 | 10 |
| `MAX_RESULTS_GROUP` | 群聊最大结果数 | 3 |

### 配置文件

主要配置文件位于 `config.js`，支持通过环境变量覆盖默认配置。

## 📁 项目结构

```
Find-Jav-bot/
├── src/                    # 源代码目录
│   ├── handlers/          # 命令处理器
│   │   └── commandHandlers.js
│   ├── services/          # 服务层
│   │   └── javbusService.js
│   ├── utils/             # 工具模块
│   │   ├── logger.js
│   │   ├── storage.js
│   │   └── validator.js
│   └── index.js           # 主入口文件
├── data/                  # 数据存储目录
├── logs/                  # 日志目录
├── config.js              # 配置文件
├── ecosystem.config.js    # PM2 配置
├── package.json           # 项目配置
└── README.md             # 项目文档
```

## 🔧 开发

### 代码检查

```bash
# 运行 ESLint
npm run lint

# 自动修复
npm run lint:fix
```

### 测试

```bash
npm test
```

### 日志查看

```bash
# 查看 PM2 日志
npm run pm2:logs

# 查看错误日志
tail -f logs/error.log

# 查看完整日志
tail -f logs/combined.log
```

## 🛠️ 部署

### 使用 PM2 部署

1. 安装 PM2：
```bash
npm install -g pm2
```

2. 启动应用：
```bash
npm run pm2:start
```

3. 查看状态：
```bash
pm2 status
```

4. 重启应用：
```bash
npm run pm2:restart
```

### 使用 Docker 部署

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

## 📊 监控和维护

### 健康检查

机器人内置健康检查功能，可以监控：
- JavBus 服务可用性
- 数据库连接状态
- 内存使用情况

### 日志管理

- 日志文件自动轮转
- 错误日志单独存储
- 结构化日志格式

### 数据备份

定期备份以下文件：
- `data/state.json` - 状态统计
- `data/groups.json` - 群组信息

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## ⚠️ 免责声明

本项目仅供学习和研究使用，请遵守当地法律法规。使用者需要自行承担使用风险。

## 🆘 常见问题

### Q: 机器人无法启动
A: 检查 Telegram Token 是否正确设置，确保网络连接正常。

### Q: 查询结果为空
A: 可能是网络问题或目标网站结构变化，请稍后重试。

### Q: 日志文件过大
A: 日志文件会自动轮转，也可以手动清理旧日志文件。

### Q: 内存使用过高
A: 检查是否有内存泄漏，可以重启机器人释放内存。

---

**注意**: 请确保遵守 Telegram 的使用条款和相关法律法规。



