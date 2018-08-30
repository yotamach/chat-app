const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketio(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.on('createMessage',(message) => {
        console.log('Create message',message);

        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disonnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});