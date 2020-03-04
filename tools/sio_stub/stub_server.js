const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors');

//Port from environment variable or default - 4001
const port = process.env.PORT || 8786;

//Setting up express and adding socketIo middleware
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server);

//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
    console.log("New client connected");

    //Here we listen on a new namespace called "incoming data"
    socket.on("incoming data", (data)=>{
        //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
        console.log("emiting - ", data);
       socket.broadcast.emit("outgoing data", data);
    });

    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));