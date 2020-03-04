const socket = require('socket.io-client')('http://127.0.0.1:8786');
const randomLocation = require('random-location');

// Epicenter of the simulaiton
const epicenter = {
    latitude: 37.7768006,
    longitude: -122.4187928
};

// Radius of the simulation in meters
const radius = 5000;

// Number of Flight to simulate
const numberOfFlights = 30;

let flightPlans = [];

// Initialize the flightPayloads
for (var i = 0; i < numberOfFlights; i++) {
    let flightPlan = generateFlightPlan(i);
    console.log(flightPlan);
    flightPlans[i] = flightPlan;
}

function generateFlightPlan(i) {
    const randomPoint = randomLocation.randomCirclePoint(epicenter, radius);

    const xAndY = generateXandY();

    return {
        id: i,
        latDeg: randomPoint.latitude,
        lonDeg: randomPoint.longitude,
        x: xAndY.x,
        y: xAndY.y,
        cyclesLapsed: 0
    };
}

function flyFlightPlan(flightPlan) {
    let newLatDeg = flightPlan.latDeg + flightPlan.x / 1000;
    let newLonDeg = flightPlan.lonDeg + flightPlan.y / 1000;

    flightPlan.latDeg = newLatDeg;
    flightPlan.lonDeg = newLonDeg;

    flightPlan.cyclesLapsed = flightPlan.cyclesLapsed + 1;

    return flightPlan;
}

function generateXandY(min, max) {
    let possibleDirections = [-1, 0, 1];

    let x = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
    let y = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];

    while (x === 0 && y === 0) {
        // both x and y are 0... the aircraft won't move...

        let whoToRetryRandom = Math.floor(Math.random() * 2);

        if (whoToRetryRandom === 0) {
            x = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
        } else {
            y = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
        }
    }

    return {
        x: x,
        y: y
    };
}

function generatePayload(flightPlan) {
    return {
        data: {
            vid: 'ARKITS' + String(flightPlan.id),
            latDeg: flightPlan.latDeg,
            lonDeg: flightPlan.lonDeg
        },
        metadata: {
            sourceTimestamp: new Date().toISOString()
        }
    };
}

setInterval(function() {
    for (var i = 0; i < numberOfFlights; i++) {
        let flightPlan = flightPlans[i];

        let newFlightPlan = flyFlightPlan(flightPlan);

        // update flightPlans
        flightPlans[i] = newFlightPlan;

        let payload = generatePayload(newFlightPlan);

        console.log('Generated - ', payload);

        socket.emit('brodcast_position', payload);
    }
}, 1000);
