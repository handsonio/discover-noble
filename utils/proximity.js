exports.computeProximity = function(rssi, measuredPower) {
  var accuracy = Math.pow(12.0, 1.5 * ((rssi / measuredPower) - 1));
  var proximity = null;

  if (accuracy < 0) {
    proximity = 'unknown';
  } else if (accuracy < 0.5) {
    proximity = 'immediate';
  } else if (accuracy < 4.0) {
    proximity = 'near';
  } else {
    proximity = 'far';
  }
  return proximity;  
}

