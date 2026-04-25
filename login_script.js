module.exports = (oauthProvider, message, content) => `
<script>
(function() {
  function recieveMessage(e) {
    console.log("recieveMessage %o", e);
    if (!e.origin) {
      console.log("no origin");
      return;
    }
    window.opener.postMessage(
      'authorization:' + oauthProvider + ':' + message + ':' + JSON.stringify(content),
      e.origin
    );
  }
  window.addEventListener("message", recieveMessage, false);
  window.opener.postMessage("authorizing:" + oauthProvider, "*");
})()
</script>
`;
