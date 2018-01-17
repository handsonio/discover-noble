var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning(); // equivalent to noble.startScanning([], false);
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
  console.log('Device found : %s %s %s %s', 
    peripheral.id, 
    peripheral.advertisement.localName, 
    peripheral.connectable, 
    peripheral.addressType);
});