const MailConfig = require('../../config/mailer');
const hbs = require('nodemailer-express-handlebars');
const smtpTransport = MailConfig.SMTPTransport;
const winston = require('winston');
const {infoLogConfig} = require('../../config/log').winston;
const logger = winston.createLogger(infoLogConfig);

/**
 * Send OTP to an email
 */
exports.handle = function (to, otp){
	//set handlabar config.
	MailConfig.ViewOption(smtpTransport, hbs);
	//create email helper options.
    let helperOptions = {
        from: '"Botsup" <botsup@vfirst.com>',
        to: to,
        subject: 'Verify your Botsup Account',
        template: 'otpVerification',
        context: {
            otp: otp
        }
    };
    //verify transporter and send email.
    smtpTransport.verify((error, success) => {
        logger.info('Sending email verification OTP');
        if (error) {
        	logger.error(error);
        } else {
            smtpTransport.sendMail(helperOptions, (error, info) => {
                if (error) {
                	logger.error(error);
                }
                else{
                	logger.info('Email verification OTP sent');
                }
            });
        }
    });
};