# Telegram-Find-Jav-bot
Telegram 番号机器人 源码
这是一个使用Telegram Bot API创建的Telegram机器人。它使用Node.js编写，并使用一些第三方库（如node-telegram-bot-api、cheerio、axios、moment）进行操作。

这个机器人的主要功能包括：

响应/start命令，发送欢迎消息。
响应/state命令，显示机器人的工作状态。可以使用/state命令查看最近5天的工作状态，或使用/state n（其中n为数字）命令查看最近n天的工作状态。
响应/av命令，根据输入的车牌号查询相关信息，并返回查询结果。
响应/usercount命令，统计机器人的总用户数量，并列出正在使用机器人的用户信息。
响应聊天消息，记录群组的聊天ID和名称。
响应/next和/prev命令，用于翻页显示记录的群组信息。
响应/groupcount命令，统计机器人加入的群组数量，并按页显示群组名称。

### 不解答任何疑问

## 使用和启动
- 安装Node.js [前往下载](https://nodejs.org/zh-cn/download/)(版本越新越好)
- 下载本项目源码到你本地
- 1.1.下载nodejs
  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  sudo apt-get install -y nodejs

  1.2
   npm install -g pm2

  1.3
  安装完毕运行 node -v 查看版本号

  1.4
  下载机器人脚本文件
git clone https://github.com/nrop19/Find-Jav-bot.git

- **在index.js的第二行填入你的Telegram机器人Token**
- /** Telegram机器人的Token */
const token = '机器人Token';
const robotName = '如@shanshui_bot';
- 在命令行工具使用cd命令进入源码目录
- 执行安装脚本命令
  - npm install
- 执行运行脚本命令
  - npm run test



