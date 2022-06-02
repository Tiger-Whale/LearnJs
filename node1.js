let http = require("http");
http
  .createServer(function (req, rep) {
    rep.writeHead(200, { "Content-Type": "text/plain" });
    rep.end("Hello World");
  })
  .listen(8888);
console.log("test server on 8888");
