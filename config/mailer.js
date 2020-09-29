const nodeMailer = require('nodemailer');
require('dotenv').config();
const config = require('../config/email');

module.exports.SMTPTransport = nodeMailer.createTransport({
    host: config.smtp_service_host,
    port: config.smtp_service_port,
    // secure: environment.SMTP_SERVICE_SECURE, // upgrade later with START TLS
    debug: true,
    auth: {
        user: config.smtp_service_user,
        pass: config.smtp_service_password
    }
});

module.exports.ViewOption = (transport, hbs) => {

    const handlebarOptions = {
        viewEngine: {
            extName: '.hbs',
            partialsDir: 'views/emails',
            layoutsDir: 'views/emails',
            defaultLayout: 'layout.hbs',
        },
        viewPath: 'views/emails',
        extName: '.hbs'
    };

    transport.use('compile', hbs(handlebarOptions));
};
