const express = require('express');
const app = express();
const http = require('http')
const cors = require("cors");
//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
// Donot add start script if using nodemon 
const { Server } = require("socket.io")
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", //  we have to write where our react would be running 
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    console.log(`User Connected ${socket.id}`);
    // Here join_room is a event 
    // here data would be the room parameter
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID ${socket.id} joined room :${data}`);
    })

    socket.on("send_message", (data) => {
        socket.join(data.room);
        console.log(data); // it tells us what message we are sending
        // for receiving message to frontend 
        // to keyword is used to send data to a particular person
        socket.to(data.room).emit("receive_message", (data));
    })
    // when person disconncects means close its tab
    socket.on("disconnect", () => {
        console.log("User Disconnected ", socket.id)
    })
}) // means we are listening for the event name conncection

server.listen(5000, () => {
    console.log("Server Connected");
})