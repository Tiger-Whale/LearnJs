let events = require("events");
let eventEmitter = new events.EventEmitter();

let listener1 = function listener1() {
  console.log("listener1 Ready");
};

let listener2 = function listener2() {
  console.log("listener2 Ready");
};

eventEmitter.addListener("listen", listener1);
eventEmitter.on("listen", listener2);

let listenerCount = eventEmitter.listenerCount("listen");
console.log(listenerCount, "listener has been ready");
eventEmitter.emit("listen");

eventEmitter.removeListener("listen", listener1);
console.log("listener1 不再受监听。");
let listenerCountAfter = eventEmitter.listenerCount("listen");
console.log(listenerCountAfter, "listener has been ready");
