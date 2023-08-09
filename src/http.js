import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { app } from './app';
import { mainHandleRegister } from './services/sockets';

export const http = createServer(app);

const io = new Server(http, {
    cors: {
        origin: '*'
    }
});

const onConnection = socket => {
    mainHandleRegister(io,socket);
}

io.on('connection',onConnection)



