/**
 * Created by rishabhkhanna on 02/12/17.
 */
var socket = io();

$(function () {
   var msg = $('#msg');
   var sendBtn = $('#send');
   var chat = $('#chat');

   sendBtn.click(function () {
        socket.emit('new_msg',msg.val());
   })

    socket.on('chat', function (data) {
        chat.append("<li>"+ data+"</li>")
    })
});