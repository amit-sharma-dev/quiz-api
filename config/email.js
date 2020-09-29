require('dotenv').config();

module.exports = {
    'smtp_service_host': process.env.SMTP_SERVICE_HOST || 'smtp.mailtrap.io',
    'smtp_service_port': process.env.SMTP_SERVICE_PORT || 2525,
    'smtp_service_user': process.env.SMTP_USER_NAME || '',
    'smtp_service_password': process.env.SMTP_USER_PASSWORD || '',
};
