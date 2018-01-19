// MetaWear BEACON UUID : '326a900085cb9195d9dd464cfbbae75a'

var Bleacon = require('bleacon');
var utils = require('../utils/proximity');
var KalmanFilter = require('kalmanjs').default;
var kalmanFilter = new KalmanFilter({R: 0.01, Q: 3});

Bleacon.on('discover', function(bleacon) {
  var filteredRssi = kalmanFilter.filter(bleacon.rssi);

  console.log('device: uuid = %s, rssi = %d, filteredRssi = %d, measuredPower = %d, proximity = %s, filteredProximity = %s', 
    bleacon.uuid,
    bleacon.rssi, 
    filteredRssi,
    bleacon.measuredPower, 
    bleacon.proximity,
    utils.computeProximity(filteredRssi, bleacon.measuredPower));
});

// Bleacon scan on the advertised UUID, the one included within the payload, this is not the device UUID (MAC address)
Bleacon.startScanning(); 

