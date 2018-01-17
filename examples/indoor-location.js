var Bleacon = require('bleacon');
var utils = require('../utils/proximity');
var KalmanFilter = require('kalmanjs').default;
var kalmanFilter = new KalmanFilter({R: 0.01, Q: 3});

Bleacon.on('discover', function(bleacon) {
  console.log('device: uuid = %s, rssi = %d, filteredRssi = %d, measuredPower = %d, proximity = %s, filteredProximity = %s', 
    bleacon.uuid, 
    bleacon.rssi, 
    kalmanFilter.filter(bleacon.rssi), 
    bleacon.measuredPower, 
    bleacon.proximity,
    utils.computeProximity(bleacon.rssi, bleacon.measuredPower));
});

Bleacon.startScanning();