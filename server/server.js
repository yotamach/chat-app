const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketio(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat App'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

    socket.on('createMessage',(message) => {
        console.log('Create message',message);

        io.emit('newMessage',generateMessage(message.from,message.text));
    });

    socket.on('disconnect', () => {
        console.log('User was disonnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});