var noble = require('noble');
var columnify = require('columnify');
var options = {  
  showHeaders: false,
  minWidth: 15,
  truncate: true,
  config: {
    id: {maxWidth: 15},
    name: {maxWidth: 15}
}};

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning(); // equivalent to noble.startScanning([], false);
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
  var data = {
    'mac': peripheral.id,
    'name': peripheral.advertisement.localName,
    'rssi': peripheral.rssi,
    'connectable': peripheral.connectable,
    'addressType': peripheral.addressType
  }

  console.log(columnify([data], options));
});