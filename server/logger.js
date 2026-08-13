const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: { service: 'compasspanion' },
  timestamp: pino.stdTimeFunctions.isoTime
});

module.exports = logger;
