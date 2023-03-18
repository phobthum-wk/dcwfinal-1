var winston = require('winston');
var logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: __dirname + '/logger.log',
      json: false,
      timestamp: function () {
        return new Date()
      },
      handleExceptions: true,
      humanReadableUnhandledException: true,
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: __dirname + '/exceptions.log', json: false })
  ],
  exitOnError: false
});
module.exports = logger;
module.exports.stream = {
  write: function (message, encoding) {
    logger.info(message);
  }
};