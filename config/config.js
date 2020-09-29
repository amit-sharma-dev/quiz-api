require('dotenv').config();

module.exports = {
  'secret': process.env.JWT_SECRET || 'secret-super',
  'jwt_expire_time': process.env.JWT_EXPIRE_TIME || '10d',
  'site_base_uri': process.env.SITE_BASE_URI || 'http://localhost:9761'
};