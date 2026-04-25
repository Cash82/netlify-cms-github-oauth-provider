const { AuthorizationCode } = require('simple-oauth2');

const config = {
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET
  },
  auth: {
    tokenHost: process.env.GIT_HOSTNAME || 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize'
  }
};

const oauth2 = new AuthorizationCode(config);

const authMiddleWareInit = (provider) => {
  return oauth2;
};

module.exports = authMiddleWareInit;
