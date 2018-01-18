// 681507c17a5c

var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
  peripheral.connect(function(error) {
    console.log('connected to peripheral: ' + peripheral.uuid);
    peripheral.discoverServices(['180a'], function(error, services) {
      var deviceInformationService = services[0];
      console.log('discovered device information service');

      deviceInformationService.discoverCharacteristics(['2a29'], function(error, characteristics) {
        var manufacturerNameCharacteristic = characteristics[0];
        console.log('discovered manufacturer name characteristic');

        manufacturerNameCharacteristic.read(function(error, data) {
          // data is a buffer
          console.log('manufacture name is: ' + data.toString('utf8'));
        });
      });
    });
  });
});