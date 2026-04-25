const { AuthorizationCode } = require('simple-oauth2');

module.exports = {
  getClient: () => {
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
    return new AuthorizationCode(config);
  },

  getToken: async (code) => {
    const client = module.exports.getClient();
    const tokenParams = {
      code,
      redirect_uri: process.env.REDIRECT_URL
    };
    return await client.authorizationCode.getToken(tokenParams);
  }
};
