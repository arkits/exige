let socket = require('socket.io-client')('http://127.0.0.1:8786');

let payload = {};

setInterval(function () {

    for (var i = 0; i < 30; i++) {

        payload = {
            data: {
                vid: "ARKITS" + String(i),
                latDeg: Math.round((Math.random()*360 - 180) * 1000)/1000,
                lonDeg: Math.round((Math.random()*360 - 180) * 1000)/1000
            },
            metadata: {
                sourceTimestamp: new Date().toISOString()
            }
        };

        console.log("Generated - ", payload);

        socket.emit('brodcast_position', payload);

    }

}, 1000);