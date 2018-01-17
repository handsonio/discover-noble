var noble = require('noble');

noble.on('stateChange', function(state) {
  // possible state values: "unknown", "resetting", "unsupported", "unauthorized", "poweredOff", "poweredOn"

  console.log("adapter state :", state);
});