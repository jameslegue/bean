var beanio = require("bean-io");
var board = new beanio.Board({
  timeout: 30000 //optional - defaults to 30 seconds
  // uuid: 'myUuid' //optional - will use first bean found
});

board.on("ready", function() {
  console.log("CONNECTED");
  this.pinMode(13, this.MODES.OUTPUT);

  var byte = 0;

  // This will "blink" the on board led
  setInterval(function() {
    this.digitalWrite(13, (byte ^= 1));
  }.bind(this), 500);
});