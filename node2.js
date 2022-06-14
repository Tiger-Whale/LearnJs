const { throws } = require("assert");
let events = require("events");

let eventEmitter = new events.EventEmitter();

let connectionHandler = function connection() {
  console.log("connect database correct");
};

let revicedHandler = function reviced() {
  console.log("reviced data correct");
};

//链接数据
eventEmitter.on("connection", connectionHandler);

//获取数据
eventEmitter.on("data_reviced", revicedHandler);

let connectionCorrect = eventEmitter.emit("connection");

if (connectionCorrect) {
  eventEmitter.emit("data_reviced");
}
