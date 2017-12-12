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
let users = {};

io.on('connection', function (socket) {


    console.log("a new connection has connected");

    socket.on('new_msg', function (data) {
        if (data.msg.charAt(0) == '@'){
            console.log(data);
            console.log(data.msg.split(" ")[0]);
            var msg = data.msg.substring(data.msg.indexOf(" ") + 1)
            console.log(msg)
            io.to(users[data.msg.split(" ")[0]]).emit('chat',{
                username: data.username,
                msg : msg
            });

        }else{
            console.log(data);
            io.emit('chat', data);
        }

    })

    socket.on('store_user', function (data) {
        users["@" + data.user] = socket.id
        console.log(users);
    })


})

app.use('/', express.static(path.join(__dirname, "/public_static")));


server.listen(8989, function () {
    console.log("Magic happens at 8989");
})