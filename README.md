# Discover Noble !

This repository contains the code used during an handson.io tech talk aiming at demonstrating the basics of the BLE communication in Raspberry Pi using [Noble](https://github.com/sandeepmistry/noble)

Setup your raspberry Pi Zero W with [these instructions](https://github.com/handsonio/zerow-metawear) to be able to properly run the course.

Go to the root directory to run the following examples

## Adapter state - Powering on and off

Demonstrates the detection of the Bluetooth adapter state by noble.

Live example (in French) on Youtube [here](https://youtu.be/BJ8-B8bZwLk?t=45m59s)

```npm run adapter-state```

Open a new terminal session on the Raspberry Pi and play with the state of the adapter

```
$ bluetoothctl
$ power off
$ power on
$ quit
```

You can also use the deprecated `hciconfig` to configure the state of the adapter, the default bluetooth adapter is usually on `hci0`.

Power off: 
```
hciconfig hci0 down
```
Power on : 
```
hciconfig hci0 up
```

Typical console output : 

```
adapter state : poweredOn
adapter state : poweredOff
adapter state : poweredOn
```

## Scan

Demonstrates the scanning of the surrounding devices but also demonstrate the behaviour of some beacons which advertise their payload but change their MAC address (they use a random address type). The Estimote stickers with firmware revision 1.0.0 and 1.0.1 are used in the live demo. The MAC address of a device is a bad identifier for beacons, better to look inside the payload.

Live example (in French) on Youtube [here](https://youtu.be/BJ8-B8bZwLk?t=51m34s)

```npm run scan```

Typical console output : 

```
c0e10a447c39  Surge     -71 true  random
f4e10a647c01            -55 true  public
d3e10b447cd1            -67 true  random
a2e10a448c37  Charge HR -49 true  random
...
```
  
## Scan Duplicates

Demonstrates that the scanning with the duplicates allow the receiver to see the changing **R**eceived **S**ignal **S**trength **I**ndicator of the surounding devices. Measuring the **RSSI** as often as possible is a pre-requisite to compute the proximity of the advertising device.

```npm run scan-duplicates```

## Indoor Location

Demonstrates the filtering the RSSI with Kalman filters to better estimate the position of a BLE device advertising as an iBeacon (standard defined by Apple in 2013 including the calibrated RSSI @ 1 meter whitin the advertised payload).

Live example (in French) on Youtube [here](https://youtu.be/BJ8-B8bZwLk?t=1h18m26s)

```npm run indoor-location```

