let socket = require('socket.io-client')('http://127.0.0.1:4001');

let payload = {
    vehicleId: null,
    latitude: null,
    longitude: null
};

//Simulating reading data every 100 milliseconds
setInterval(function () {

    for (var i = 0; i < 30; i++) {

        payload["vehicleId"] = "ARKITS" + String(i);
        payload["latitude"] = Math.round((Math.random()*360 - 180) * 1000)/1000;
        payload["longitude"] = Math.round((Math.random()*360 - 180) * 1000)/1000;

        console.log("emiting - ", payload);

        socket.emit('incoming data', payload);

    }

}, 1000);