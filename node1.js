// let http = require("http");
// http
//   .createServer(function (req, rep) {
//     rep.writeHead(200, { "Content-Type": "text/plain" });
//     rep.end("Hello World");
//   })
//   .listen(8888);
// console.log("test server on 8888");

//no sync
let fs = require("fs");
let data = fs.readFileSync("./1.html");
console.log("data", data.toString);
console.log("Project End");

//sync
fs.readFile("./1.html", function (error, data) {
  if (error) return console.log(error);
  console.log("data", data.toString);
});
console.log("Project End");
