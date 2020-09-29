const winston = require('winston');
const appRoot = require('app-root-path');
const {format} = require('winston');
const {combine, timestamp, printf} = format;
const myFormat = printf(({level, message, timestamp}) => {
    message = typeof message === 'object' ? JSON.stringify(message) : message;
    return `{ ${timestamp} ${level}: ${message} }`;
});

const datetime = new Date();
const logDate = datetime.toISOString().slice(0, 10);

const appSettings = {
    winston: {
        infoLogConfig: {
            format: combine(
                timestamp(),
                myFormat
            ),
            level: 'info',
            transports: [
                new winston.transports.File({
                    filename: `${appRoot}/storage/logs/info-` + logDate + `.log`,
                    json: true,
                    maxsize: 5242880, // 5MB
                }),
                new winston.transports.Console()
            ]
        },
    }
};

module.exports = appSettings;