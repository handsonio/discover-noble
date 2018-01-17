# Discover Noble !

This repository contains the code used during an handson.io tech talk aiming at demonstrating the basics of the BLE communication in Raspberry Pi using [Noble](https://github.com/sandeepmistry/noble)

Setup your raspberry Pi Zero W with [these instructions](https://github.com/handsonio/zerow-metawear) to be able to properly run the course.

## Adapter state - Powering on and off

`npm run adapter-state`

Open a new terminal session on the Raspberry Pi and change play with the state of the adapter

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

The example should reports console entries like the following ones : 

```
adapter state : poweredOff
adapter state : poweredOn
```



