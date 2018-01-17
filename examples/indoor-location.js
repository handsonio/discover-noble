var Bleacon = require('bleacon');
var utils = require('../utils/proximity');
var KalmanFilter = require('kalmanjs').default;
var kalmanFilter = new KalmanFilter({R: 0.01, Q: 3});

Bleacon.on('discover', function(bleacon) {
  var filteredRssi = kalmanFilter.filter(bleacon.rssi);

  console.log('device: uuid = %s, rssi = %d, filteredRssi = %d, measuredPower = %d, proximity = %s, filteredProximity = %s', 
    bleacon.uuid,
    bleacon.minor,
    bleacon.major,
    bleacon.rssi, 
    filteredRssi, 
    bleacon.measuredPower, 
    bleacon.proximity,
    utils.computeProximity(filteredRssi, bleacon.measuredPower));
});

Bleacon.startScanning();

