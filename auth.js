const authMiddleWareInit = (oauth2) => {
  return function authMiddleWare(req, res) {
    const authorizationUri = oauth2.authorizeURL({
      redirect_uri: process.env.REDIRECT_URL,
      scope: process.env.SCOPES || 'repo,user',
      state: Math.random().toString(36).substring(7)
    });
    res.redirect(authorizationUri);
  };
};

module.exports = authMiddleWareInit;
