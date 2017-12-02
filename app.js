/**
 * Created by rishabhkhanna on 02/12/17.
 */
const express = require('express');
const app = express();
// http module of node.js
const http = require('http');
// getting the server of app
const server = http.Server(app);
//getting the socket.io lib
const socketio = require('socket.io');
//pass the server on which you have to create a socket
const io = socketio(server);
const path = require('path');

io.on('connection', function (socket) {
    console.log("a new connection has connected");
    socket.on('new_msg', function (data) {
        console.log(data);
        io.emit('chat', data);
    })
})

app.use('/', express.static(path.join(__dirname, "/public_static")));



server.listen(8989,function () {
    console.log("Magic happens at 8989");
})