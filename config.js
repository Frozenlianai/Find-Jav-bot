require('dotenv').config();

module.exports = {
  // Telegram Bot 配置
  telegram: {
    token: process.env.TELEGRAM_TOKEN || '你的Telegram机器人Token',
    robotName: process.env.ROBOT_NAME || 'Find-Jav-Bot',
    polling: true,
    pollingOptions: {
      timeout: 10,
      limit: 100,
      retryTimeout: 5000
    }
  },

  // JavBus 配置
  javbus: {
    baseURL: process.env.JAVBUS_URL || 'https://www.javbus.com',
    timeout: parseInt(process.env.REQUEST_TIMEOUT) || 10000,
    retries: parseInt(process.env.REQUEST_RETRIES) || 3,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  },

  // 应用配置
  app: {
    port: parseInt(process.env.PORT) || 3000,
    environment: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info'
  },

  // 数据持久化配置
  storage: {
    stateFile: process.env.STATE_FILE || './data/state.json',
    groupsFile: process.env.GROUPS_FILE || './data/groups.json',
    logsDir: process.env.LOGS_DIR || './logs'
  },

  // 速率限制配置
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15分钟
    max: 100, // 限制每个IP 15分钟内最多100个请求
    message: '请求过于频繁，请稍后再试'
  },

  // 分页配置
  pagination: {
    resultsPerPage: parseInt(process.env.RESULTS_PER_PAGE) || 20,
    maxResultsPerPage: 50
  },

  // 查询配置
  search: {
    maxResultsPrivate: parseInt(process.env.MAX_RESULTS_PRIVATE) || 10,
    maxResultsGroup: parseInt(process.env.MAX_RESULTS_GROUP) || 3,
    defaultStateDays: parseInt(process.env.DEFAULT_STATE_DAYS) || 5
  }
}; 