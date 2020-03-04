const socket = require('socket.io-client')('http://127.0.0.1:8786');
const randomLocation = require('random-location');

let payload = {};

const P = {
    latitude: 37.7768006,
    longitude: -122.4187928
};

const R = 5000; // meters

setInterval(function() {
    for (var i = 0; i < 30; i++) {
        const randomPoint = randomLocation.randomCirclePoint(P, R);

        payload = {
            data: {
                vid: 'ARKITS' + String(i),
                latDeg: randomPoint.latitude,
                lonDeg: randomPoint.longitude
            },
            metadata: {
                sourceTimestamp: new Date().toISOString()
            }
        };

        console.log('Generated - ', payload);

        socket.emit('brodcast_position', payload);
    }
}, 1000);
