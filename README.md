# Telegram-Find-Jav-bot

## 项目简介
这是一个基于 Node.js 和 Telegram Bot API 的番号机器人，支持通过 Telegram 查询番号信息，统计用户和群组，支持状态与群组本地持久化，具备网络请求重试机制。

---

## 环境依赖
- Node.js 10+（建议最新版）
- npm
- pm2（进程守护）

---

## 安装与部署

### 1. 克隆项目
```bash
git clone https://github.com/Frozenlianai/Find-Jav-bot-TG-
cd Find-Jav-bot
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置机器人Token和名称
- 推荐使用环境变量配置：
  - `TELEGRAM_TOKEN`：你的 Telegram Bot Token
  - `ROBOT_NAME`：你的机器人名称（可选）
- 或直接修改 `config.js`：
```js
module.exports = {
  token: '你的Telegram机器人Token',
  robotName: '机器人',
  javbusURL: 'https://www.javbus.com'
};
```

### 4. 启动机器人
- 使用 pm2 启动并守护进程：
```bash
npm run test
```
- 查看日志：
```bash
npm run logs
```
- 停止所有机器人：
```bash
npm run kill
```

---

## 数据持久化说明
- 机器人运行期间会自动在项目根目录生成 `state.json`（状态统计）和 `groups.json`（群组信息），重启后自动加载。
- 若需迁移或备份数据，直接复制这两个文件即可。

---

## 机器人命令与用法
- `/start`  发送欢迎信息
- `/help`   查看所有命令和用法
- `/state`  查看最近5天工作状态
- `/state n`  查看最近n天工作状态（如 `/state 10`）
- `/av [番号]`  查询番号信息（如 `/av abp-123`）
- `/usercount`  统计总用户数及用户信息
- `/groupcount`  统计机器人加入的群组数量及名称（支持分页）
- `/next`  查看下一页群组
- `/prev`  查看上一页群组

---

## 常见问题与建议
- **Token安全**：请勿将真实Token上传或泄露。
- **依赖问题**：如遇依赖安装失败，建议升级Node和npm版本。
- **网络问题**：机器人已内置网络请求重试机制，若仍频繁超时请检查服务器网络。
- **数据丢失**：请定期备份 `state.json` 和 `groups.json`。
- **日志排查**：所有运行日志和错误日志均在 `logs/` 目录下。

---

## 贡献与反馈
如有建议、Bug或需求，欢迎提交 Issue 或 PR。



