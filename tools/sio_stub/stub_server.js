const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const port = process.env.PORT || 8786;

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log('New client connected');

    socket.on('brodcast_position', data => {

        data['metadata']['brodcastTimestamp'] = new Date().toISOString();

        console.log('Brodcasting to Clients - ', data);
        socket.broadcast.emit('position', data);
    });

    socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
