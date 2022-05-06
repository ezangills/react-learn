const { isObject } = require('util');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log("A user connected");
    socket.on('chat-message', function(msg) {
        console.log('message: ' + msg.msg);
        io.emit('chat-message', msg)
    });
});

http.listen(3001, function() {
    console.log("Listening on 3001")
});