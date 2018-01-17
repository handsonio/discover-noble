var noble = require('noble');
var columnify = require('columnify');
var options = {  
  showHeaders: false,
  minWidth: 10,
  config: {
    id: {maxWidth: 20},
    name: {minWidth:20, maxWidth: 20}
}};

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning([], true); 
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