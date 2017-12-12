/**
 * Created by rishabhkhanna on 02/12/17.
 */
var socket = io();
var user = prompt("who you ?")
$(function () {
    var msg = $('#msg');
    var sendBtn = $('#send');
    var chat = $('#chat');


    sendBtn.click(function () {
        socket.emit('new_msg', {
            username: user,
            msg: msg.val()
        });
    })


    socket.on('chat', function (data) {
        chat.append("<li>" + data.username + ": " + data.msg + "</li>")
    })

    socket.emit('store_user', {
        user: user
    })
});