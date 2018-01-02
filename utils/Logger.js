const winston = require('winston')

const log = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ],
  level: process.env.LOG_LEVEL
})

module.exports = log
